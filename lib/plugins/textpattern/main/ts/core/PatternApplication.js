/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import TreeWalker from 'tinymce/core/api/dom/TreeWalker';
import Tools from 'tinymce/core/api/util/Tools';
import { Option } from '@ephox/katamari';
import { findInlinePattern, findPattern, findReplacementPattern } from './FindPatterns';
var isText = function (node) {
    return node && node.nodeType === 3;
};
var setSelection = function (editor, textNode, offset) {
    var newRng = editor.dom.createRng();
    newRng.setStart(textNode, offset);
    newRng.setEnd(textNode, offset);
    editor.selection.setRng(newRng);
};
var splitContainer = function (container, pattern, endOffset, startOffset) {
    // Split text node and remove start/end from text node
    container = startOffset > 0 ? container.splitText(startOffset) : container;
    container.splitText(endOffset - startOffset + pattern.end.length);
    container.deleteData(0, pattern.start.length);
    container.deleteData(container.data.length - pattern.end.length, pattern.end.length);
    return container;
};
var splitAndApply = function (editor, container, found, inline) {
    var formatArray = Tools.isArray(found.pattern.format) ? found.pattern.format : [found.pattern.format];
    var validFormats = Tools.grep(formatArray, function (formatName) {
        var format = editor.formatter.get(formatName);
        return format && format[0].inline;
    });
    if (validFormats.length !== 0) {
        editor.undoManager.transact(function () {
            container = splitContainer(container, found.pattern, found.endOffset, found.startOffset);
            // The splitContainer function above moves the selection range in Safari
            // so we have to set it back to the next sibling, the nbsp behind the
            // split text node, when applying inline formats.
            if (inline) {
                editor.selection.setCursorLocation(container.nextSibling, 1);
            }
            formatArray.forEach(function (format) {
                editor.formatter.apply(format, {}, container);
            });
        });
        return container;
    }
};
// Handles inline formats like *abc* and **abc**
var applyInlinePattern = function (editor, patterns, inline) {
    var rng = editor.selection.getRng();
    return Option.from(findInlinePattern(patterns, rng, inline)).map(function (foundPattern) {
        return splitAndApply(editor, rng.startContainer, foundPattern, inline);
    });
};
var applyInlinePatternSpace = function (editor, patterns) {
    applyInlinePattern(editor, patterns, true).each(function (wrappedTextNode) {
        // Move space after the newly formatted node
        var lastChar = wrappedTextNode.data.slice(-1);
        if (/[\u00a0 ]/.test(lastChar)) {
            wrappedTextNode.deleteData(wrappedTextNode.data.length - 1, 1);
            var lastCharNode = editor.dom.doc.createTextNode(lastChar);
            editor.dom.insertAfter(lastCharNode, wrappedTextNode.parentNode);
            setSelection(editor, lastCharNode, 1);
        }
    });
};
var applyInlinePatternEnter = function (editor, patterns) {
    applyInlinePattern(editor, patterns, false).each(function (wrappedTextNode) {
        setSelection(editor, wrappedTextNode, wrappedTextNode.data.length);
    });
};
// Handles block formats like ##abc or 1. abc
var applyBlockPattern = function (editor, patterns) {
    var selection, dom, container, firstTextNode, node, format, textBlockElm, pattern, walker, rng, offset;
    selection = editor.selection;
    dom = editor.dom;
    if (!selection.isCollapsed()) {
        return;
    }
    textBlockElm = dom.getParent(selection.getStart(), 'p');
    if (textBlockElm) {
        walker = new TreeWalker(textBlockElm, textBlockElm);
        while ((node = walker.next())) {
            if (isText(node)) {
                firstTextNode = node;
                break;
            }
        }
        if (firstTextNode) {
            pattern = findPattern(patterns, firstTextNode.data);
            if (!pattern) {
                return;
            }
            rng = selection.getRng(true);
            container = rng.startContainer;
            offset = rng.startOffset;
            if (firstTextNode === container) {
                offset = Math.max(0, offset - pattern.start.length);
            }
            if (Tools.trim(firstTextNode.data).length === pattern.start.length) {
                return;
            }
            if (pattern.format) {
                format = editor.formatter.get(pattern.format);
                if (format && format[0].block) {
                    firstTextNode.deleteData(0, pattern.start.length);
                    editor.formatter.apply(pattern.format, {}, firstTextNode);
                    rng.setStart(container, offset);
                    rng.collapse(true);
                    selection.setRng(rng);
                }
            }
            if (pattern.cmd) {
                editor.undoManager.transact(function () {
                    firstTextNode.deleteData(0, pattern.start.length);
                    editor.execCommand(pattern.cmd);
                });
            }
        }
    }
};
var selectionInsertText = function (editor, string) {
    var rng = editor.selection.getRng();
    var container = rng.startContainer;
    if (isText(container)) {
        var offset = rng.startOffset;
        container.insertData(offset, string);
        setSelection(editor, container, offset + string.length);
    }
    else {
        var newNode = editor.dom.doc.createTextNode(string);
        rng.insertNode(newNode);
        setSelection(editor, newNode, newNode.length);
    }
};
var applyReplacement = function (editor, target, match) {
    target.deleteData(match.startOffset, match.pattern.start.length);
    editor.insertContent(match.pattern.replacement);
    Option.from(target.nextSibling).filter(isText).each(function (nextSibling) {
        nextSibling.insertData(0, target.data);
        editor.dom.remove(target);
    });
};
var extractChar = function (node, match) {
    var offset = match.startOffset + match.pattern.start.length;
    var char = node.data.slice(offset, offset + 1);
    node.deleteData(offset, 1);
    return char;
};
var applyReplacementPattern = function (editor, patterns, inline) {
    var rng = editor.selection.getRng();
    var container = rng.startContainer;
    if (rng.collapsed && isText(container)) {
        findReplacementPattern(patterns, rng.startOffset, container.data).each(function (match) {
            var char = inline ? Option.some(extractChar(container, match)) : Option.none();
            applyReplacement(editor, container, match);
            char.each(function (ch) { return selectionInsertText(editor, ch); });
        });
    }
};
var applyReplacementPatternSpace = function (editor, patterns) {
    applyReplacementPattern(editor, patterns, true);
};
var applyReplacementPatternEnter = function (editor, patterns) {
    applyReplacementPattern(editor, patterns, false);
};
export { applyReplacementPattern, applyReplacementPatternSpace, applyReplacementPatternEnter, applyInlinePatternSpace, applyInlinePatternEnter, applyBlockPattern };
//# sourceMappingURL=PatternApplication.js.map
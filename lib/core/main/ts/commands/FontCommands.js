/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from 'tinymce/core/api/Settings';
import FontInfo from 'tinymce/core/fmt/FontInfo';
import { Option } from '@ephox/katamari';
import CaretFinder from 'tinymce/core/caret/CaretFinder';
import NodeType from 'tinymce/core/dom/NodeType';
var findFirstCaretElement = function (editor) {
    return CaretFinder.firstPositionIn(editor.getBody()).map(function (caret) {
        var container = caret.container();
        return NodeType.isText(container) ? container.parentNode : container;
    });
};
var isRangeAtStartOfNode = function (rng, root) {
    return rng.startContainer === root && rng.startOffset === 0;
};
var getCaretElement = function (editor) {
    return Option.from(editor.selection.getRng()).bind(function (rng) {
        var root = editor.getBody();
        return isRangeAtStartOfNode(rng, root) ? Option.none() : Option.from(editor.selection.getStart(true));
    });
};
var fromFontSizeNumber = function (editor, value) {
    if (/^[0-9\.]+$/.test(value)) {
        var fontSizeNumber = parseInt(value, 10);
        // Convert font size 1-7 to styles
        if (fontSizeNumber >= 1 && fontSizeNumber <= 7) {
            var fontSizes = Settings.getFontStyleValues(editor);
            var fontClasses = Settings.getFontSizeClasses(editor);
            if (fontClasses) {
                return fontClasses[fontSizeNumber - 1] || value;
            }
            else {
                return fontSizes[fontSizeNumber - 1] || value;
            }
        }
        else {
            return value;
        }
    }
    else {
        return value;
    }
};
export var fontNameAction = function (editor, value) {
    editor.formatter.toggle('fontname', { value: fromFontSizeNumber(editor, value) });
    editor.nodeChanged();
};
export var fontNameQuery = function (editor) {
    return getCaretElement(editor).fold(function () { return findFirstCaretElement(editor).map(function (caretElement) { return FontInfo.getFontFamily(editor.getBody(), caretElement); }).getOr(''); }, function (caretElement) { return FontInfo.getFontFamily(editor.getBody(), caretElement); });
};
export var fontSizeAction = function (editor, value) {
    editor.formatter.toggle('fontsize', { value: fromFontSizeNumber(editor, value) });
    editor.nodeChanged();
};
export var fontSizeQuery = function (editor) {
    return getCaretElement(editor).fold(function () { return findFirstCaretElement(editor).map(function (caretElement) { return FontInfo.getFontSize(editor.getBody(), caretElement); }).getOr(''); }, function (caretElement) { return FontInfo.getFontSize(editor.getBody(), caretElement); });
};
//# sourceMappingURL=FontCommands.js.map
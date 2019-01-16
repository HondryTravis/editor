/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Fun } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import Bookmarks from './bookmark/Bookmarks';
import NodeType from './dom/NodeType';
import Parents from './dom/Parents';
import EditorFocus from './focus/EditorFocus';
/**
 * Makes sure that everything gets wrapped in paragraphs.
 *
 * @private
 * @class tinymce.ForceBlocks
 */
var isBlockElement = function (blockElements, node) {
    return blockElements.hasOwnProperty(node.nodeName);
};
var isValidTarget = function (blockElements, node) {
    if (NodeType.isText(node)) {
        return true;
    }
    else if (NodeType.isElement(node)) {
        return !isBlockElement(blockElements, node) && !Bookmarks.isBookmarkNode(node);
    }
    else {
        return false;
    }
};
var hasBlockParent = function (blockElements, root, node) {
    return Arr.exists(Parents.parents(Element.fromDom(node), Element.fromDom(root)), function (elm) {
        return isBlockElement(blockElements, elm.dom());
    });
};
// const is
var shouldRemoveTextNode = function (blockElements, node) {
    if (NodeType.isText(node)) {
        if (node.nodeValue.length === 0) {
            return true;
        }
        else if (/^\s+$/.test(node.nodeValue) && (!node.nextSibling || isBlockElement(blockElements, node.nextSibling))) {
            return true;
        }
    }
    return false;
};
var addRootBlocks = function (editor) {
    var settings = editor.settings, dom = editor.dom, selection = editor.selection;
    var schema = editor.schema, blockElements = schema.getBlockElements();
    var node = selection.getStart();
    var rootNode = editor.getBody();
    var rng;
    var startContainer, startOffset, endContainer, endOffset, rootBlockNode;
    var tempNode, wrapped, restoreSelection;
    var rootNodeName, forcedRootBlock;
    forcedRootBlock = settings.forced_root_block;
    if (!node || !NodeType.isElement(node) || !forcedRootBlock) {
        return;
    }
    rootNodeName = rootNode.nodeName.toLowerCase();
    if (!schema.isValidChild(rootNodeName, forcedRootBlock.toLowerCase()) || hasBlockParent(blockElements, rootNode, node)) {
        return;
    }
    // Get current selection
    rng = selection.getRng();
    startContainer = rng.startContainer;
    startOffset = rng.startOffset;
    endContainer = rng.endContainer;
    endOffset = rng.endOffset;
    restoreSelection = EditorFocus.hasFocus(editor);
    // Wrap non block elements and text nodes
    node = rootNode.firstChild;
    while (node) {
        if (isValidTarget(blockElements, node)) {
            // Remove empty text nodes and nodes containing only whitespace
            if (shouldRemoveTextNode(blockElements, node)) {
                tempNode = node;
                node = node.nextSibling;
                dom.remove(tempNode);
                continue;
            }
            if (!rootBlockNode) {
                rootBlockNode = dom.create(forcedRootBlock, editor.settings.forced_root_block_attrs);
                node.parentNode.insertBefore(rootBlockNode, node);
                wrapped = true;
            }
            tempNode = node;
            node = node.nextSibling;
            rootBlockNode.appendChild(tempNode);
        }
        else {
            rootBlockNode = null;
            node = node.nextSibling;
        }
    }
    if (wrapped && restoreSelection) {
        rng.setStart(startContainer, startOffset);
        rng.setEnd(endContainer, endOffset);
        selection.setRng(rng);
        editor.nodeChanged();
    }
};
var setup = function (editor) {
    if (editor.settings.forced_root_block) {
        editor.on('NodeChange', Fun.curry(addRootBlocks, editor));
    }
};
export default {
    setup: setup
};
//# sourceMappingURL=ForceBlocks.js.map
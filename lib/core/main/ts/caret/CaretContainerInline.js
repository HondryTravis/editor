/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import NodeType from '../dom/NodeType';
import Zwsp from '../text/Zwsp';
var isText = NodeType.isText;
var startsWithCaretContainer = function (node) { return isText(node) && node.data[0] === Zwsp.ZWSP; };
var endsWithCaretContainer = function (node) { return isText(node) && node.data[node.data.length - 1] === Zwsp.ZWSP; };
var createZwsp = function (node) { return node.ownerDocument.createTextNode(Zwsp.ZWSP); };
var insertBefore = function (node) {
    if (isText(node.previousSibling)) {
        if (endsWithCaretContainer(node.previousSibling)) {
            return node.previousSibling;
        }
        else {
            node.previousSibling.appendData(Zwsp.ZWSP);
            return node.previousSibling;
        }
    }
    else if (isText(node)) {
        if (startsWithCaretContainer(node)) {
            return node;
        }
        else {
            node.insertData(0, Zwsp.ZWSP);
            return node;
        }
    }
    else {
        var newNode = createZwsp(node);
        node.parentNode.insertBefore(newNode, node);
        return newNode;
    }
};
var insertAfter = function (node) {
    if (isText(node.nextSibling)) {
        if (startsWithCaretContainer(node.nextSibling)) {
            return node.nextSibling;
        }
        else {
            node.nextSibling.insertData(0, Zwsp.ZWSP);
            return node.nextSibling;
        }
    }
    else if (isText(node)) {
        if (endsWithCaretContainer(node)) {
            return node;
        }
        else {
            node.appendData(Zwsp.ZWSP);
            return node;
        }
    }
    else {
        var newNode = createZwsp(node);
        if (node.nextSibling) {
            node.parentNode.insertBefore(newNode, node.nextSibling);
        }
        else {
            node.parentNode.appendChild(newNode);
        }
        return newNode;
    }
};
var insertInline = function (before, node) { return before ? insertBefore(node) : insertAfter(node); };
var insertInlineBefore = Fun.curry(insertInline, true);
var insertInlineAfter = Fun.curry(insertInline, false);
export { insertInline, insertInlineBefore, insertInlineAfter };
//# sourceMappingURL=CaretContainerInline.js.map
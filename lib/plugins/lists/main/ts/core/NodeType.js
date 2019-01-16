/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var isTextNode = function (node) {
    return node && node.nodeType === 3;
};
var isListNode = function (node) {
    return node && (/^(OL|UL|DL)$/).test(node.nodeName);
};
var isOlUlNode = function (node) {
    return node && (/^(OL|UL)$/).test(node.nodeName);
};
var isListItemNode = function (node) {
    return node && /^(LI|DT|DD)$/.test(node.nodeName);
};
var isDlItemNode = function (node) {
    return node && /^(DT|DD)$/.test(node.nodeName);
};
var isTableCellNode = function (node) {
    return node && /^(TH|TD)$/.test(node.nodeName);
};
var isBr = function (node) {
    return node && node.nodeName === 'BR';
};
var isFirstChild = function (node) {
    return node.parentNode.firstChild === node;
};
var isLastChild = function (node) {
    return node.parentNode.lastChild === node;
};
var isTextBlock = function (editor, node) {
    return node && !!editor.schema.getTextBlockElements()[node.nodeName];
};
var isBlock = function (node, blockElements) {
    return node && node.nodeName in blockElements;
};
var isBogusBr = function (dom, node) {
    if (!isBr(node)) {
        return false;
    }
    if (dom.isBlock(node.nextSibling) && !isBr(node.previousSibling)) {
        return true;
    }
    return false;
};
var isEmpty = function (dom, elm, keepBookmarks) {
    var empty = dom.isEmpty(elm);
    if (keepBookmarks && dom.select('span[data-mce-type=bookmark]', elm).length > 0) {
        return false;
    }
    return empty;
};
var isChildOfBody = function (dom, elm) {
    return dom.isChildOf(elm, dom.getRoot());
};
export default {
    isTextNode: isTextNode,
    isListNode: isListNode,
    isOlUlNode: isOlUlNode,
    isDlItemNode: isDlItemNode,
    isListItemNode: isListItemNode,
    isTableCellNode: isTableCellNode,
    isBr: isBr,
    isFirstChild: isFirstChild,
    isLastChild: isLastChild,
    isTextBlock: isTextBlock,
    isBlock: isBlock,
    isBogusBr: isBogusBr,
    isEmpty: isEmpty,
    isChildOfBody: isChildOfBody
};
//# sourceMappingURL=NodeType.js.map
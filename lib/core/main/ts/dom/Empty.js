/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import { Compare, Element, SelectorExists } from '@ephox/sugar';
import * as CaretCandidate from '../caret/CaretCandidate';
import NodeType from './NodeType';
import TreeWalker from '../api/dom/TreeWalker';
var hasWhitespacePreserveParent = function (rootNode, node) {
    var rootElement = Element.fromDom(rootNode);
    var startNode = Element.fromDom(node);
    return SelectorExists.ancestor(startNode, 'pre,code', Fun.curry(Compare.eq, rootElement));
};
var isWhitespace = function (rootNode, node) {
    return NodeType.isText(node) && /^[ \t\r\n]*$/.test(node.data) && hasWhitespacePreserveParent(rootNode, node) === false;
};
var isNamedAnchor = function (node) {
    return NodeType.isElement(node) && node.nodeName === 'A' && node.hasAttribute('name');
};
var isContent = function (rootNode, node) {
    return (CaretCandidate.isCaretCandidate(node) && isWhitespace(rootNode, node) === false) || isNamedAnchor(node) || isBookmark(node);
};
var isBookmark = NodeType.hasAttribute('data-mce-bookmark');
var isBogus = NodeType.hasAttribute('data-mce-bogus');
var isBogusAll = NodeType.hasAttributeValue('data-mce-bogus', 'all');
var isEmptyNode = function (targetNode) {
    var walker, node, brCount = 0;
    if (isContent(targetNode, targetNode)) {
        return false;
    }
    else {
        node = targetNode.firstChild;
        if (!node) {
            return true;
        }
        walker = new TreeWalker(node, targetNode);
        do {
            if (isBogusAll(node)) {
                node = walker.next(true);
                continue;
            }
            if (isBogus(node)) {
                node = walker.next();
                continue;
            }
            if (NodeType.isBr(node)) {
                brCount++;
                node = walker.next();
                continue;
            }
            if (isContent(targetNode, node)) {
                return false;
            }
            node = walker.next();
        } while (node);
        return brCount <= 1;
    }
};
var isEmpty = function (elm) { return isEmptyNode(elm.dom()); };
export default {
    isEmpty: isEmpty
};
//# sourceMappingURL=Empty.js.map
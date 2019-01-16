/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import NodeType from '../dom/NodeType';
var CARET_ID = '_mce_caret';
var isCaretNode = function (node) { return NodeType.isElement(node) && node.id === CARET_ID; };
var getParentCaretContainer = function (body, node) {
    while (node && node !== body) {
        if (node.id === CARET_ID) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
};
export { isCaretNode, getParentCaretContainer };
//# sourceMappingURL=FormatContainer.js.map
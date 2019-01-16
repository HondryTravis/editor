/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import DOMUtils from '../api/dom/DOMUtils';
/**
 * Handles paths of nodes within an element.
 *
 * @private
 * @class tinymce.dom.NodePath
 */
var create = function (rootNode, targetNode, normalized) {
    var path = [];
    for (; targetNode && targetNode !== rootNode; targetNode = targetNode.parentNode) {
        path.push(DOMUtils.nodeIndex(targetNode, normalized));
    }
    return path;
};
var resolve = function (rootNode, path) {
    var i, node, children;
    for (node = rootNode, i = path.length - 1; i >= 0; i--) {
        children = node.childNodes;
        if (path[i] > children.length - 1) {
            return null;
        }
        node = children[path[i]];
    }
    return node;
};
export default {
    create: create,
    resolve: resolve
};
//# sourceMappingURL=NodePath.js.map
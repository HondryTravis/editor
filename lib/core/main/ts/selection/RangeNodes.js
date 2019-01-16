/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getSelectedNode = function (range) {
    var startContainer = range.startContainer, startOffset = range.startOffset;
    if (startContainer.hasChildNodes() && range.endOffset === startOffset + 1) {
        return startContainer.childNodes[startOffset];
    }
    return null;
};
var getNode = function (container, offset) {
    if (container.nodeType === 1 && container.hasChildNodes()) {
        if (offset >= container.childNodes.length) {
            offset = container.childNodes.length - 1;
        }
        container = container.childNodes[offset];
    }
    return container;
};
export { getSelectedNode, getNode };
//# sourceMappingURL=RangeNodes.js.map
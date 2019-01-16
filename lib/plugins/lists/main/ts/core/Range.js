/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import RangeUtils from 'tinymce/core/api/dom/RangeUtils';
import NodeType from './NodeType';
var getNormalizedPoint = function (container, offset) {
    if (NodeType.isTextNode(container)) {
        return { container: container, offset: offset };
    }
    var node = RangeUtils.getNode(container, offset);
    if (NodeType.isTextNode(node)) {
        return {
            container: node,
            offset: offset >= container.childNodes.length ? node.data.length : 0
        };
    }
    else if (node.previousSibling && NodeType.isTextNode(node.previousSibling)) {
        return {
            container: node.previousSibling,
            offset: node.previousSibling.data.length
        };
    }
    else if (node.nextSibling && NodeType.isTextNode(node.nextSibling)) {
        return {
            container: node.nextSibling,
            offset: 0
        };
    }
    return { container: container, offset: offset };
};
var normalizeRange = function (rng) {
    var outRng = rng.cloneRange();
    var rangeStart = getNormalizedPoint(rng.startContainer, rng.startOffset);
    outRng.setStart(rangeStart.container, rangeStart.offset);
    var rangeEnd = getNormalizedPoint(rng.endContainer, rng.endOffset);
    outRng.setEnd(rangeEnd.container, rangeEnd.offset);
    return outRng;
};
export default {
    getNormalizedPoint: getNormalizedPoint,
    normalizeRange: normalizeRange
};
//# sourceMappingURL=Range.js.map
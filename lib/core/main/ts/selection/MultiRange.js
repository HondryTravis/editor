/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import * as RangeNodes from './RangeNodes';
var getRanges = function (selection) {
    var ranges = [];
    if (selection) {
        for (var i = 0; i < selection.rangeCount; i++) {
            ranges.push(selection.getRangeAt(i));
        }
    }
    return ranges;
};
var getSelectedNodes = function (ranges) {
    return Arr.bind(ranges, function (range) {
        var node = RangeNodes.getSelectedNode(range);
        return node ? [Element.fromDom(node)] : [];
    });
};
var hasMultipleRanges = function (selection) {
    return getRanges(selection).length > 1;
};
export default {
    getRanges: getRanges,
    getSelectedNodes: getSelectedNodes,
    hasMultipleRanges: hasMultipleRanges
};
//# sourceMappingURL=MultiRange.js.map
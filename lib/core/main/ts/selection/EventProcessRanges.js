/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
var processRanges = function (editor, ranges) {
    return Arr.map(ranges, function (range) {
        var evt = editor.fire('GetSelectionRange', { range: range });
        return evt.range !== range ? evt.range : range;
    });
};
export default {
    processRanges: processRanges
};
//# sourceMappingURL=EventProcessRanges.js.map
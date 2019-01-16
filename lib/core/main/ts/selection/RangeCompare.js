/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var isEq = function (rng1, rng2) {
    return rng1 && rng2 &&
        (rng1.startContainer === rng2.startContainer && rng1.startOffset === rng2.startOffset) &&
        (rng1.endContainer === rng2.endContainer && rng1.endOffset === rng2.endOffset);
};
export default {
    isEq: isEq
};
//# sourceMappingURL=RangeCompare.js.map
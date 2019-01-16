/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Obj } from '@ephox/katamari';
var isInlinePattern = function (pattern) {
    return Obj.has(pattern, 'start') && Obj.has(pattern, 'end');
};
var isBlockPattern = function (pattern) {
    return !Obj.has(pattern, 'end') && !Obj.has(pattern, 'replacement');
};
var isReplacementPattern = function (pattern) {
    return Obj.has(pattern, 'replacement');
};
var sortPatterns = function (patterns) {
    return Arr.sort(patterns, function (a, b) {
        if (a.start.length === b.start.length) {
            return 0;
        }
        return a.start.length > b.start.length ? -1 : 1;
    });
};
var createPatternSet = function (patterns) {
    return {
        inlinePatterns: sortPatterns(Arr.filter(patterns, isInlinePattern)),
        blockPatterns: sortPatterns(Arr.filter(patterns, isBlockPattern)),
        replacementPatterns: Arr.filter(patterns, isReplacementPattern),
    };
};
export { createPatternSet };
//# sourceMappingURL=Pattern.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import UnicodeData from './UnicodeData';
import { Arr } from '@ephox/katamari';
var SETS = UnicodeData.SETS;
var OTHER = UnicodeData.characterIndices.OTHER;
var getType = function (char) {
    var j, set, type = OTHER;
    var setsLength = SETS.length;
    for (j = 0; j < setsLength; ++j) {
        set = SETS[j];
        if (set && set.test(char)) {
            type = j;
            break;
        }
    }
    return type;
};
var memoize = function (func) {
    var cache = {};
    return function (char) {
        if (cache[char]) {
            return cache[char];
        }
        else {
            var result = func(char);
            cache[char] = result;
            return result;
        }
    };
};
var classify = function (string) {
    var memoized = memoize(getType);
    return Arr.map(string.split(''), memoized);
};
export default {
    classify: classify
};
//# sourceMappingURL=StringMapper.js.map
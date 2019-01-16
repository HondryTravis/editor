/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var charMap = {
    '\u00a0': 'nbsp',
    '\u00ad': 'shy'
};
var charMapToRegExp = function (charMap, global) {
    var key, regExp = '';
    for (key in charMap) {
        regExp += key;
    }
    return new RegExp('[' + regExp + ']', global ? 'g' : '');
};
var charMapToSelector = function (charMap) {
    var key, selector = '';
    for (key in charMap) {
        if (selector) {
            selector += ',';
        }
        selector += 'span.mce-' + charMap[key];
    }
    return selector;
};
export default {
    charMap: charMap,
    regExp: charMapToRegExp(charMap),
    regExpGlobal: charMapToRegExp(charMap, true),
    selector: charMapToSelector(charMap),
    charMapToRegExp: charMapToRegExp,
    charMapToSelector: charMapToSelector
};
//# sourceMappingURL=Data.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var is = function (expected) { return function (actual) { return expected === actual; }; };
var isNbsp = is('\u00a0');
var isWhiteSpace = function (chr) { return /^[\r\n\t ]$/.test(chr); };
var isContent = function (chr) { return !isWhiteSpace(chr) && !isNbsp(chr); };
export { isNbsp, isWhiteSpace, isContent };
//# sourceMappingURL=CharType.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Utility functions for working with zero width space
 * characters used as character containers etc.
 *
 * @private
 * @class tinymce.text.Zwsp
 * @example
 * var isZwsp = Zwsp.isZwsp('\uFEFF');
 * var abc = Zwsp.trim('a\uFEFFc');
 */
// This is technically not a ZWSP but a ZWNBSP or a BYTE ORDER MARK it used to be a ZWSP
var ZWSP = '\uFEFF';
var isZwsp = function (chr) { return chr === ZWSP; };
var trim = function (text) { return text.replace(new RegExp(ZWSP, 'g'), ''); };
export default {
    isZwsp: isZwsp,
    ZWSP: ZWSP,
    trim: trim
};
//# sourceMappingURL=Zwsp.js.map
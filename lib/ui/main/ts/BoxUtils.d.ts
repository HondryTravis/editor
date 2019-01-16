/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Parses the specified box value. A box value contains 1-4 properties in clockwise order.
     *
     * @method parseBox
     * @param {String/Number} value Box value "0 1 2 3" or "0" etc.
     * @return {Object} Object with top/right/bottom/left properties.
     * @private
     */
    parseBox(value: any): {
        top: any;
        left: any;
        bottom: any;
        right: any;
    };
    measureBox(elm: any, prefix: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};
/**
 * Utility class for box parsing and measuring.
 *
 * @private
 * @class tinymce.ui.BoxUtils
 */
export default _default;

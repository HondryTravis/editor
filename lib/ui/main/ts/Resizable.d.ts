/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Resizes the control to contents.
     *
     * @method resizeToContent
     */
    resizeToContent(): void;
    /**
     * Resizes the control to a specific width/height.
     *
     * @method resizeTo
     * @param {Number} w Control width.
     * @param {Number} h Control height.
     * @return {tinymce.ui.Control} Current control instance.
     */
    resizeTo(w: any, h: any): any;
    /**
     * Resizes the control to a specific relative width/height.
     *
     * @method resizeBy
     * @param {Number} dw Relative control width.
     * @param {Number} dh Relative control height.
     * @return {tinymce.ui.Control} Current control instance.
     */
    resizeBy(dw: any, dh: any): any;
};
/**
 * Resizable mixin. Enables controls to be resized.
 *
 * @mixin tinymce.ui.Resizable
 */
export default _default;

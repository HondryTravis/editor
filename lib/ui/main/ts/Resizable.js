/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import DomUtils from './DomUtils';
/**
 * Resizable mixin. Enables controls to be resized.
 *
 * @mixin tinymce.ui.Resizable
 */
export default {
    /**
     * Resizes the control to contents.
     *
     * @method resizeToContent
     */
    resizeToContent: function () {
        this._layoutRect.autoResize = true;
        this._lastRect = null;
        this.reflow();
    },
    /**
     * Resizes the control to a specific width/height.
     *
     * @method resizeTo
     * @param {Number} w Control width.
     * @param {Number} h Control height.
     * @return {tinymce.ui.Control} Current control instance.
     */
    resizeTo: function (w, h) {
        // TODO: Fix hack
        if (w <= 1 || h <= 1) {
            var rect = DomUtils.getWindowSize();
            w = w <= 1 ? w * rect.w : w;
            h = h <= 1 ? h * rect.h : h;
        }
        this._layoutRect.autoResize = false;
        return this.layoutRect({ minW: w, minH: h, w: w, h: h }).reflow();
    },
    /**
     * Resizes the control to a specific relative width/height.
     *
     * @method resizeBy
     * @param {Number} dw Relative control width.
     * @param {Number} dh Relative control height.
     * @return {tinymce.ui.Control} Current control instance.
     */
    resizeBy: function (dw, dh) {
        var self = this, rect = self.layoutRect();
        return self.resizeTo(rect.w + dw, rect.h + dh);
    }
};
//# sourceMappingURL=Resizable.js.map
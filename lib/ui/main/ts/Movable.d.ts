/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Tests various positions to get the most suitable one.
     *
     * @method testMoveRel
     * @param {DOMElement} elm Element to position against.
     * @param {Array} rels Array with relative positions.
     * @return {String} Best suitable relative position.
     */
    testMoveRel(elm: any, rels: any): any;
    /**
     * Move relative to the specified element.
     *
     * @method moveRel
     * @param {Element} elm Element to move relative to.
     * @param {String} rel Relative mode. For example: br-tl.
     * @return {tinymce.ui.Control} Current control instance.
     */
    moveRel(elm: any, rel: any): any;
    /**
     * Move by a relative x, y values.
     *
     * @method moveBy
     * @param {Number} dx Relative x position.
     * @param {Number} dy Relative y position.
     * @return {tinymce.ui.Control} Current control instance.
     */
    moveBy(dx: any, dy: any): any;
    /**
     * Move to absolute position.
     *
     * @method moveTo
     * @param {Number} x Absolute x position.
     * @param {Number} y Absolute y position.
     * @return {tinymce.ui.Control} Current control instance.
     */
    moveTo(x: any, y: any): any;
};
export default _default;

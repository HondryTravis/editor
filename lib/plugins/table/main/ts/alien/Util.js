/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Compare, Element, Attr, SelectorFilter } from '@ephox/sugar';
import { Arr } from '@ephox/katamari';
var getBody = function (editor) {
    return Element.fromDom(editor.getBody());
};
var getPixelWidth = function (elm) { return elm.getBoundingClientRect().width; };
var getPixelHeight = function (elm) { return elm.getBoundingClientRect().height; };
var getIsRoot = function (editor) {
    return function (element) {
        return Compare.eq(element, getBody(editor));
    };
};
var removePxSuffix = function (size) {
    return size ? size.replace(/px$/, '') : '';
};
var addSizeSuffix = function (size) {
    if (/^[0-9]+$/.test(size)) {
        size += 'px';
    }
    return size;
};
var removeDataStyle = function (table) {
    var dataStyleCells = SelectorFilter.descendants(table, 'td[data-mce-style],th[data-mce-style]');
    Attr.remove(table, 'data-mce-style');
    Arr.each(dataStyleCells, function (cell) {
        Attr.remove(cell, 'data-mce-style');
    });
};
export { getBody, getIsRoot, addSizeSuffix, removePxSuffix, getPixelWidth, getPixelHeight, removeDataStyle };
//# sourceMappingURL=Util.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun, Option } from '@ephox/katamari';
import { Element as SugarElement, Node as SugarNode, PredicateFind, Css, Compare } from '@ephox/sugar';
import DOMUtils from 'tinymce/core/api/dom/DOMUtils';
var getSpecifiedFontProp = function (propName, rootElm, elm) {
    var getProperty = function (elm) { return Css.getRaw(elm, propName); };
    var isRoot = function (elm) { return Compare.eq(SugarElement.fromDom(rootElm), elm); };
    return PredicateFind.closest(SugarElement.fromDom(elm), function (elm) { return getProperty(elm).isSome(); }, isRoot).bind(getProperty);
};
var round = function (number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
};
var toPt = function (fontSize, precision) {
    if (/[0-9.]+px$/.test(fontSize)) {
        // Round to the nearest 0.5
        return round(parseInt(fontSize, 10) * 72 / 96, precision || 0) + 'pt';
    }
    return fontSize;
};
var normalizeFontFamily = function (fontFamily) {
    // 'Font name', Font -> Font name,Font
    return fontFamily.replace(/[\'\"\\]/g, '').replace(/,\s+/g, ',');
};
var getComputedFontProp = function (propName, elm) {
    return Option.from(DOMUtils.DOM.getStyle(elm, propName, true));
};
var getFontProp = function (propName) {
    return function (rootElm, elm) {
        return Option.from(elm)
            .map(SugarElement.fromDom)
            .filter(SugarNode.isElement)
            .bind(function (element) {
            return getSpecifiedFontProp(propName, rootElm, element.dom())
                .or(getComputedFontProp(propName, element.dom()));
        })
            .getOr('');
    };
};
export default {
    getFontSize: getFontProp('font-size'),
    getFontFamily: Fun.compose(normalizeFontFamily, getFontProp('font-family')),
    toPt: toPt
};
//# sourceMappingURL=FontInfo.js.map
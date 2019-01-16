/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Utils from 'tinymce/plugins/image/core/Utils';
import DOMUtils from 'tinymce/core/api/dom/DOMUtils';
import { Merger } from '@ephox/katamari';
import { document } from '@ephox/dom-globals';
var DOM = DOMUtils.DOM;
var getHspace = function (image) {
    if (image.style.marginLeft && image.style.marginRight && image.style.marginLeft === image.style.marginRight) {
        return Utils.removePixelSuffix(image.style.marginLeft);
    }
    else {
        return '';
    }
};
var getVspace = function (image) {
    if (image.style.marginTop && image.style.marginBottom && image.style.marginTop === image.style.marginBottom) {
        return Utils.removePixelSuffix(image.style.marginTop);
    }
    else {
        return '';
    }
};
var getBorder = function (image) {
    if (image.style.borderWidth) {
        return Utils.removePixelSuffix(image.style.borderWidth);
    }
    else {
        return '';
    }
};
var getAttrib = function (image, name) {
    if (image.hasAttribute(name)) {
        return image.getAttribute(name);
    }
    else {
        return '';
    }
};
var getStyle = function (image, name) {
    return image.style[name] ? image.style[name] : '';
};
var hasCaption = function (image) {
    return image.parentNode !== null && image.parentNode.nodeName === 'FIGURE';
};
var setAttrib = function (image, name, value) {
    image.setAttribute(name, value);
};
var wrapInFigure = function (image) {
    var figureElm = DOM.create('figure', { class: 'image' });
    DOM.insertAfter(figureElm, image);
    figureElm.appendChild(image);
    figureElm.appendChild(DOM.create('figcaption', { contentEditable: true }, 'Caption'));
    figureElm.contentEditable = 'false';
};
var removeFigure = function (image) {
    var figureElm = image.parentNode;
    DOM.insertAfter(image, figureElm);
    DOM.remove(figureElm);
};
var toggleCaption = function (image) {
    if (hasCaption(image)) {
        removeFigure(image);
    }
    else {
        wrapInFigure(image);
    }
};
var normalizeStyle = function (image, normalizeCss) {
    var attrValue = image.getAttribute('style');
    var value = normalizeCss(attrValue !== null ? attrValue : '');
    if (value.length > 0) {
        image.setAttribute('style', value);
        image.setAttribute('data-mce-style', value);
    }
    else {
        image.removeAttribute('style');
    }
};
var setSize = function (name, normalizeCss) {
    return function (image, name, value) {
        if (image.style[name]) {
            image.style[name] = Utils.addPixelSuffix(value);
            normalizeStyle(image, normalizeCss);
        }
        else {
            setAttrib(image, name, value);
        }
    };
};
var getSize = function (image, name) {
    if (image.style[name]) {
        return Utils.removePixelSuffix(image.style[name]);
    }
    else {
        return getAttrib(image, name);
    }
};
var setHspace = function (image, value) {
    var pxValue = Utils.addPixelSuffix(value);
    image.style.marginLeft = pxValue;
    image.style.marginRight = pxValue;
};
var setVspace = function (image, value) {
    var pxValue = Utils.addPixelSuffix(value);
    image.style.marginTop = pxValue;
    image.style.marginBottom = pxValue;
};
var setBorder = function (image, value) {
    var pxValue = Utils.addPixelSuffix(value);
    image.style.borderWidth = pxValue;
};
var setBorderStyle = function (image, value) {
    image.style.borderStyle = value;
};
var getBorderStyle = function (image) { return getStyle(image, 'borderStyle'); };
var isFigure = function (elm) { return elm.nodeName === 'FIGURE'; };
var isImage = function (elm) { return elm.nodeName === 'IMG'; };
var defaultData = function () {
    return {
        src: '',
        alt: '',
        title: '',
        width: '',
        height: '',
        class: '',
        style: '',
        caption: false,
        hspace: '',
        vspace: '',
        border: '',
        borderStyle: ''
    };
};
var getStyleValue = function (normalizeCss, data) {
    var image = document.createElement('img');
    setAttrib(image, 'style', data.style);
    if (getHspace(image) || data.hspace !== '') {
        setHspace(image, data.hspace);
    }
    if (getVspace(image) || data.vspace !== '') {
        setVspace(image, data.vspace);
    }
    if (getBorder(image) || data.border !== '') {
        setBorder(image, data.border);
    }
    if (getBorderStyle(image) || data.borderStyle !== '') {
        setBorderStyle(image, data.borderStyle);
    }
    return normalizeCss(image.getAttribute('style'));
};
var create = function (normalizeCss, data) {
    var image = document.createElement('img');
    write(normalizeCss, Merger.merge(data, { caption: false }), image);
    // Always set alt even if data.alt is an empty string
    setAttrib(image, 'alt', data.alt);
    if (data.caption) {
        var figure = DOM.create('figure', { class: 'image' });
        figure.appendChild(image);
        figure.appendChild(DOM.create('figcaption', { contentEditable: true }, 'Caption'));
        figure.contentEditable = 'false';
        return figure;
    }
    else {
        return image;
    }
};
var read = function (normalizeCss, image) {
    return {
        src: getAttrib(image, 'src'),
        alt: getAttrib(image, 'alt'),
        title: getAttrib(image, 'title'),
        width: getSize(image, 'width'),
        height: getSize(image, 'height'),
        class: getAttrib(image, 'class'),
        style: normalizeCss(getAttrib(image, 'style')),
        caption: hasCaption(image),
        hspace: getHspace(image),
        vspace: getVspace(image),
        border: getBorder(image),
        borderStyle: getStyle(image, 'borderStyle')
    };
};
var updateProp = function (image, oldData, newData, name, set) {
    if (newData[name] !== oldData[name]) {
        set(image, name, newData[name]);
    }
};
var normalized = function (set, normalizeCss) {
    return function (image, name, value) {
        set(image, value);
        normalizeStyle(image, normalizeCss);
    };
};
var write = function (normalizeCss, newData, image) {
    var oldData = read(normalizeCss, image);
    updateProp(image, oldData, newData, 'caption', function (image, _name, _value) { return toggleCaption(image); });
    updateProp(image, oldData, newData, 'src', setAttrib);
    updateProp(image, oldData, newData, 'alt', setAttrib);
    updateProp(image, oldData, newData, 'title', setAttrib);
    updateProp(image, oldData, newData, 'width', setSize('width', normalizeCss));
    updateProp(image, oldData, newData, 'height', setSize('height', normalizeCss));
    updateProp(image, oldData, newData, 'class', setAttrib);
    updateProp(image, oldData, newData, 'style', normalized(function (image, value) { return setAttrib(image, 'style', value); }, normalizeCss));
    updateProp(image, oldData, newData, 'hspace', normalized(setHspace, normalizeCss));
    updateProp(image, oldData, newData, 'vspace', normalized(setVspace, normalizeCss));
    updateProp(image, oldData, newData, 'border', normalized(setBorder, normalizeCss));
    updateProp(image, oldData, newData, 'borderStyle', normalized(setBorderStyle, normalizeCss));
};
export { getStyleValue, defaultData, isFigure, isImage, create, read, write };
//# sourceMappingURL=ImageData.js.map
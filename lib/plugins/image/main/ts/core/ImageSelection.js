/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { defaultData, read, create, isFigure, write } from 'tinymce/plugins/image/core/ImageData';
import Utils from 'tinymce/plugins/image/core/Utils';
var normalizeCss = function (editor, cssText) {
    var css = editor.dom.styles.parse(cssText);
    var mergedCss = Utils.mergeMargins(css);
    var compressed = editor.dom.styles.parse(editor.dom.styles.serialize(mergedCss));
    return editor.dom.styles.serialize(compressed);
};
var getSelectedImage = function (editor) {
    var imgElm = editor.selection.getNode();
    var figureElm = editor.dom.getParent(imgElm, 'figure.image');
    if (figureElm) {
        return editor.dom.select('img', figureElm)[0];
    }
    if (imgElm &&
        (imgElm.nodeName !== 'IMG' ||
            imgElm.getAttribute('data-mce-object') ||
            imgElm.getAttribute('data-mce-placeholder'))) {
        return null;
    }
    return imgElm;
};
var splitTextBlock = function (editor, figure) {
    var dom = editor.dom;
    var textBlock = dom.getParent(figure.parentNode, function (node) {
        return editor.schema.getTextBlockElements()[node.nodeName];
    }, editor.getBody());
    if (textBlock) {
        return dom.split(textBlock, figure);
    }
    else {
        return figure;
    }
};
var readImageDataFromSelection = function (editor) {
    var image = getSelectedImage(editor);
    return image ? read(function (css) { return normalizeCss(editor, css); }, image) : defaultData();
};
var insertImageAtCaret = function (editor, data) {
    var elm = create(function (css) { return normalizeCss(editor, css); }, data);
    editor.dom.setAttrib(elm, 'data-mce-id', '__mcenew');
    editor.focus();
    editor.selection.setContent(elm.outerHTML);
    var insertedElm = editor.dom.select('*[data-mce-id="__mcenew"]')[0];
    editor.dom.setAttrib(insertedElm, 'data-mce-id', null);
    if (isFigure(insertedElm)) {
        var figure = splitTextBlock(editor, insertedElm);
        editor.selection.select(figure);
    }
    else {
        editor.selection.select(insertedElm);
    }
};
var syncSrcAttr = function (editor, image) {
    editor.dom.setAttrib(image, 'src', image.getAttribute('src'));
};
var deleteImage = function (editor, image) {
    if (image) {
        var elm = editor.dom.is(image.parentNode, 'figure.image') ? image.parentNode : image;
        editor.dom.remove(elm);
        editor.focus();
        editor.nodeChanged();
        if (editor.dom.isEmpty(editor.getBody())) {
            editor.setContent('');
            editor.selection.setCursorLocation();
        }
    }
};
var writeImageDataToSelection = function (editor, data) {
    var image = getSelectedImage(editor);
    write(function (css) { return normalizeCss(editor, css); }, data, image);
    syncSrcAttr(editor, image);
    if (isFigure(image.parentNode)) {
        var figure = image.parentNode;
        splitTextBlock(editor, figure);
        editor.selection.select(image.parentNode);
    }
    else {
        editor.selection.select(image);
        Utils.waitLoadImage(editor, data, image);
    }
};
var insertOrUpdateImage = function (editor, data) {
    var image = getSelectedImage(editor);
    if (image) {
        if (data.src) {
            writeImageDataToSelection(editor, data);
        }
        else {
            deleteImage(editor, image);
        }
    }
    else if (data.src) {
        insertImageAtCaret(editor, data);
    }
};
export { normalizeCss, readImageDataFromSelection, insertOrUpdateImage };
//# sourceMappingURL=ImageSelection.js.map
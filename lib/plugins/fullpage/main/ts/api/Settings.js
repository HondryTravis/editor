/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var shouldHideInSourceView = function (editor) {
    return editor.getParam('fullpage_hide_in_source_view');
};
var getDefaultXmlPi = function (editor) {
    return editor.getParam('fullpage_default_xml_pi');
};
var getDefaultEncoding = function (editor) {
    return editor.getParam('fullpage_default_encoding');
};
var getDefaultFontFamily = function (editor) {
    return editor.getParam('fullpage_default_font_family');
};
var getDefaultFontSize = function (editor) {
    return editor.getParam('fullpage_default_font_size');
};
var getDefaultTextColor = function (editor) {
    return editor.getParam('fullpage_default_text_color');
};
var getDefaultTitle = function (editor) {
    return editor.getParam('fullpage_default_title');
};
var getDefaultDocType = function (editor) {
    return editor.getParam('fullpage_default_doctype', '<!DOCTYPE html>');
};
export default {
    shouldHideInSourceView: shouldHideInSourceView,
    getDefaultXmlPi: getDefaultXmlPi,
    getDefaultEncoding: getDefaultEncoding,
    getDefaultFontFamily: getDefaultFontFamily,
    getDefaultFontSize: getDefaultFontSize,
    getDefaultTextColor: getDefaultTextColor,
    getDefaultTitle: getDefaultTitle,
    getDefaultDocType: getDefaultDocType
};
//# sourceMappingURL=Settings.js.map
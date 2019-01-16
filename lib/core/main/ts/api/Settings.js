/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
import { Fun } from '@ephox/katamari';
var getBodySetting = function (editor, name, defaultValue) {
    var value = editor.getParam(name, defaultValue);
    if (value.indexOf('=') !== -1) {
        var bodyObj = editor.getParam(name, '', 'hash');
        return bodyObj.hasOwnProperty(editor.id) ? bodyObj[editor.id] : defaultValue;
    }
    else {
        return value;
    }
};
var getIframeAttrs = function (editor) {
    return editor.getParam('iframe_attrs', {});
};
var getDocType = function (editor) {
    return editor.getParam('doctype', '<!DOCTYPE html>');
};
var getDocumentBaseUrl = function (editor) {
    return editor.getParam('document_base_url', '');
};
var getBodyId = function (editor) {
    return getBodySetting(editor, 'body_id', 'tinymce');
};
var getBodyClass = function (editor) {
    return getBodySetting(editor, 'body_class', '');
};
var getContentSecurityPolicy = function (editor) {
    return editor.getParam('content_security_policy', '');
};
var shouldPutBrInPre = function (editor) {
    return editor.getParam('br_in_pre', true);
};
var getForcedRootBlock = function (editor) {
    // Legacy option
    if (editor.getParam('force_p_newlines', false)) {
        return 'p';
    }
    var block = editor.getParam('forced_root_block', 'p');
    return block === false ? '' : block;
};
var getForcedRootBlockAttrs = function (editor) {
    return editor.getParam('forced_root_block_attrs', {});
};
var getBrNewLineSelector = function (editor) {
    return editor.getParam('br_newline_selector', '.mce-toc h2,figcaption,caption');
};
var getNoNewLineSelector = function (editor) {
    return editor.getParam('no_newline_selector', '');
};
var shouldKeepStyles = function (editor) {
    return editor.getParam('keep_styles', true);
};
var shouldEndContainerOnEmptyBlock = function (editor) {
    return editor.getParam('end_container_on_empty_block', false);
};
var getFontStyleValues = function (editor) { return Tools.explode(editor.getParam('font_size_style_values', '')); };
var getFontSizeClasses = function (editor) { return Tools.explode(editor.getParam('font_size_classes', '')); };
var getImagesDataImgFilter = function (editor) {
    return editor.getParam('images_dataimg_filter', Fun.constant(true), 'function');
};
var isAutomaticUploadsEnabled = function (editor) {
    return editor.getParam('automatic_uploads', true, 'boolean');
};
var shouldReuseFileName = function (editor) {
    return editor.getParam('images_reuse_filename', false, 'boolean');
};
var shouldReplaceBlobUris = function (editor) {
    return editor.getParam('images_replace_blob_uris', true, 'boolean');
};
var getImageUploadUrl = function (editor) {
    return editor.getParam('images_upload_url', '', 'string');
};
var getImageUploadBasePath = function (editor) {
    return editor.getParam('images_upload_base_path', '', 'string');
};
var getImagesUploadCredentials = function (editor) {
    return editor.getParam('images_upload_credentials', false, 'boolean');
};
var getImagesUploadHandler = function (editor) {
    return editor.getParam('images_upload_handler', null, 'function');
};
var shouldUseContentCssCors = function (editor) {
    return editor.getParam('content_css_cors', false, 'boolean');
};
export default {
    getIframeAttrs: getIframeAttrs,
    getDocType: getDocType,
    getDocumentBaseUrl: getDocumentBaseUrl,
    getBodyId: getBodyId,
    getBodyClass: getBodyClass,
    getContentSecurityPolicy: getContentSecurityPolicy,
    shouldPutBrInPre: shouldPutBrInPre,
    getForcedRootBlock: getForcedRootBlock,
    getForcedRootBlockAttrs: getForcedRootBlockAttrs,
    getBrNewLineSelector: getBrNewLineSelector,
    getNoNewLineSelector: getNoNewLineSelector,
    shouldKeepStyles: shouldKeepStyles,
    shouldEndContainerOnEmptyBlock: shouldEndContainerOnEmptyBlock,
    getFontStyleValues: getFontStyleValues,
    getFontSizeClasses: getFontSizeClasses,
    getImagesDataImgFilter: getImagesDataImgFilter,
    isAutomaticUploadsEnabled: isAutomaticUploadsEnabled,
    shouldReuseFileName: shouldReuseFileName,
    shouldReplaceBlobUris: shouldReplaceBlobUris,
    getImageUploadUrl: getImageUploadUrl,
    getImageUploadBasePath: getImageUploadBasePath,
    getImagesUploadCredentials: getImagesUploadCredentials,
    getImagesUploadHandler: getImagesUploadHandler,
    shouldUseContentCssCors: shouldUseContentCssCors
};
//# sourceMappingURL=Settings.js.map
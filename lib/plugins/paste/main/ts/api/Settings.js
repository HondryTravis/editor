/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var shouldPlainTextInform = function (editor) {
    return editor.getParam('paste_plaintext_inform', true);
};
var shouldBlockDrop = function (editor) {
    return editor.getParam('paste_block_drop', false);
};
var shouldPasteDataImages = function (editor) {
    return editor.getParam('paste_data_images', false);
};
var shouldFilterDrop = function (editor) {
    return editor.getParam('paste_filter_drop', true);
};
var getPreProcess = function (editor) {
    return editor.getParam('paste_preprocess');
};
var getPostProcess = function (editor) {
    return editor.getParam('paste_postprocess');
};
var getWebkitStyles = function (editor) {
    return editor.getParam('paste_webkit_styles');
};
var shouldRemoveWebKitStyles = function (editor) {
    return editor.getParam('paste_remove_styles_if_webkit', true);
};
var shouldMergeFormats = function (editor) {
    return editor.getParam('paste_merge_formats', true);
};
var isSmartPasteEnabled = function (editor) {
    return editor.getParam('smart_paste', true);
};
var isPasteAsTextEnabled = function (editor) {
    return editor.getParam('paste_as_text', false);
};
var getRetainStyleProps = function (editor) {
    return editor.getParam('paste_retain_style_properties');
};
var getWordValidElements = function (editor) {
    var defaultValidElements = ('-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,' +
        '-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,' +
        'td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody');
    return editor.getParam('paste_word_valid_elements', defaultValidElements);
};
var shouldConvertWordFakeLists = function (editor) {
    return editor.getParam('paste_convert_word_fake_lists', true);
};
var shouldUseDefaultFilters = function (editor) {
    return editor.getParam('paste_enable_default_filters', true);
};
export default {
    shouldPlainTextInform: shouldPlainTextInform,
    shouldBlockDrop: shouldBlockDrop,
    shouldPasteDataImages: shouldPasteDataImages,
    shouldFilterDrop: shouldFilterDrop,
    getPreProcess: getPreProcess,
    getPostProcess: getPostProcess,
    getWebkitStyles: getWebkitStyles,
    shouldRemoveWebKitStyles: shouldRemoveWebKitStyles,
    shouldMergeFormats: shouldMergeFormats,
    isSmartPasteEnabled: isSmartPasteEnabled,
    isPasteAsTextEnabled: isPasteAsTextEnabled,
    getRetainStyleProps: getRetainStyleProps,
    getWordValidElements: getWordValidElements,
    shouldConvertWordFakeLists: shouldConvertWordFakeLists,
    shouldUseDefaultFilters: shouldUseDefaultFilters
};
//# sourceMappingURL=Settings.js.map
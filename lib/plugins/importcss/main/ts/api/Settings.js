/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var shouldMergeClasses = function (editor) {
    return editor.getParam('importcss_merge_classes');
};
var shouldImportExclusive = function (editor) {
    return editor.getParam('importcss_exclusive');
};
var getSelectorConverter = function (editor) {
    return editor.getParam('importcss_selector_converter');
};
var getSelectorFilter = function (editor) {
    return editor.getParam('importcss_selector_filter');
};
var getCssGroups = function (editor) {
    return editor.getParam('importcss_groups');
};
var shouldAppend = function (editor) {
    return editor.getParam('importcss_append');
};
var getFileFilter = function (editor) {
    return editor.getParam('importcss_file_filter');
};
export default {
    shouldMergeClasses: shouldMergeClasses,
    shouldImportExclusive: shouldImportExclusive,
    getSelectorConverter: getSelectorConverter,
    getSelectorFilter: getSelectorFilter,
    getCssGroups: getCssGroups,
    shouldAppend: shouldAppend,
    getFileFilter: getFileFilter
};
//# sourceMappingURL=Settings.js.map
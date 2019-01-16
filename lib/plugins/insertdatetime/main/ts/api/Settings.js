/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getDateFormat = function (editor) {
    return editor.getParam('insertdatetime_dateformat', editor.translate('%Y-%m-%d'));
};
var getTimeFormat = function (editor) {
    return editor.getParam('insertdatetime_timeformat', editor.translate('%H:%M:%S'));
};
var getFormats = function (editor) {
    return editor.getParam('insertdatetime_formats', ['%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p', '%D']);
};
var getDefaultDateTime = function (editor) {
    var formats = getFormats(editor);
    return formats.length > 0 ? formats[0] : getTimeFormat(editor);
};
var shouldInsertTimeElement = function (editor) {
    return editor.getParam('insertdatetime_element', false);
};
export default {
    getDateFormat: getDateFormat,
    getTimeFormat: getTimeFormat,
    getFormats: getFormats,
    getDefaultDateTime: getDefaultDateTime,
    shouldInsertTimeElement: shouldInsertTimeElement
};
//# sourceMappingURL=Settings.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getPreviewDialogWidth = function (editor) {
    return parseInt(editor.getParam('plugin_preview_width', '650'), 10);
};
var getPreviewDialogHeight = function (editor) {
    return parseInt(editor.getParam('plugin_preview_height', '500'), 10);
};
var getContentStyle = function (editor) {
    return editor.getParam('content_style', '');
};
export default {
    getPreviewDialogWidth: getPreviewDialogWidth,
    getPreviewDialogHeight: getPreviewDialogHeight,
    getContentStyle: getContentStyle
};
//# sourceMappingURL=Settings.js.map
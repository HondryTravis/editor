/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getAutoResizeMinHeight = function (editor) {
    return parseInt(editor.getParam('autoresize_min_height', editor.getElement().offsetHeight), 10);
};
var getAutoResizeMaxHeight = function (editor) {
    return parseInt(editor.getParam('autoresize_max_height', 0), 10);
};
var getAutoResizeOverflowPadding = function (editor) {
    return editor.getParam('autoresize_overflow_padding', 1);
};
var getAutoResizeBottomMargin = function (editor) {
    return editor.getParam('autoresize_bottom_margin', 50);
};
var shouldAutoResizeOnInit = function (editor) {
    return editor.getParam('autoresize_on_init', true);
};
export default {
    getAutoResizeMinHeight: getAutoResizeMinHeight,
    getAutoResizeMaxHeight: getAutoResizeMaxHeight,
    getAutoResizeOverflowPadding: getAutoResizeOverflowPadding,
    getAutoResizeBottomMargin: getAutoResizeBottomMargin,
    shouldAutoResizeOnInit: shouldAutoResizeOnInit
};
//# sourceMappingURL=Settings.js.map
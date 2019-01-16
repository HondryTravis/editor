/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import EditorManager from 'tinymce/core/api/EditorManager';
import EditorSettings from '../alien/EditorSettings';
import Layout from '../core/Layout';
var toAbsoluteUrl = function (editor, url) {
    return editor.documentBaseURI.toAbsolute(url);
};
var urlFromName = function (name) {
    var prefix = EditorManager.baseURL + '/skins/';
    return name ? prefix + name : prefix + 'lightgray';
};
var getTextSelectionToolbarItems = function (editor) {
    return EditorSettings.getToolbarItemsOr(editor, 'selection_toolbar', ['bold', 'italic', '|', 'quicklink', 'h2', 'h3', 'blockquote']);
};
var getInsertToolbarItems = function (editor) {
    return EditorSettings.getToolbarItemsOr(editor, 'insert_toolbar', ['quickimage', 'quicktable']);
};
var getPositionHandler = function (editor) {
    return EditorSettings.getHandlerOr(editor, 'inline_toolbar_position_handler', Layout.defaultHandler);
};
var getSkinUrl = function (editor) {
    var settings = editor.settings;
    return settings.skin_url ? toAbsoluteUrl(editor, settings.skin_url) : urlFromName(settings.skin);
};
var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
};
export default {
    getTextSelectionToolbarItems: getTextSelectionToolbarItems,
    getInsertToolbarItems: getInsertToolbarItems,
    getPositionHandler: getPositionHandler,
    getSkinUrl: getSkinUrl,
    isSkinDisabled: isSkinDisabled
};
//# sourceMappingURL=Settings.js.map
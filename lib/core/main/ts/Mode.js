/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element, Class } from '@ephox/sugar';
import Events from 'tinymce/core/api/Events';
var setEditorCommandState = function (editor, cmd, state) {
    try {
        editor.getDoc().execCommand(cmd, false, state);
    }
    catch (ex) {
        // Ignore
    }
};
var toggleClass = function (elm, cls, state) {
    if (Class.has(elm, cls) && state === false) {
        Class.remove(elm, cls);
    }
    else if (state) {
        Class.add(elm, cls);
    }
};
var toggleReadOnly = function (editor, state) {
    toggleClass(Element.fromDom(editor.getBody()), 'mce-content-readonly', state);
    if (state) {
        editor.selection.controlSelection.hideResizeRect();
        editor.readonly = true;
        editor.getBody().contentEditable = 'false';
    }
    else {
        editor.readonly = false;
        editor.getBody().contentEditable = 'true';
        setEditorCommandState(editor, 'StyleWithCSS', false);
        setEditorCommandState(editor, 'enableInlineTableEditing', false);
        setEditorCommandState(editor, 'enableObjectResizing', false);
        editor.focus();
        editor.nodeChanged();
    }
};
var setMode = function (editor, mode) {
    if (mode === getMode(editor)) {
        return;
    }
    if (editor.initialized) {
        toggleReadOnly(editor, mode === "readonly" /* ReadOnly */);
    }
    else {
        editor.on('init', function () {
            toggleReadOnly(editor, mode === "readonly" /* ReadOnly */);
        });
    }
    Events.fireSwitchMode(editor, mode);
};
var getMode = function (editor) { return editor.readonly ? "readonly" /* ReadOnly */ : "design" /* Design */; };
var isReadOnly = function (editor) { return editor.readonly === true; };
export { setMode, getMode, isReadOnly };
//# sourceMappingURL=Mode.js.map
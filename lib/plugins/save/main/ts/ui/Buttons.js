/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from '../api/Settings';
var stateToggle = function (editor) {
    return function (e) {
        var ctrl = e.control;
        editor.on('nodeChange dirty', function () {
            ctrl.disabled(Settings.enableWhenDirty(editor) && !editor.isDirty());
        });
    };
};
var register = function (editor) {
    editor.addButton('save', {
        icon: 'save',
        text: 'Save',
        cmd: 'mceSave',
        disabled: true,
        onPostRender: stateToggle(editor)
    });
    editor.addButton('cancel', {
        text: 'Cancel',
        icon: false,
        cmd: 'mceCancel',
        disabled: true,
        onPostRender: stateToggle(editor)
    });
    editor.addShortcut('Meta+S', '', 'mceSave');
};
export default {
    register: register
};
//# sourceMappingURL=Buttons.js.map
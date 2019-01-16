/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import * as Storage from '../core/Storage';
var postRender = function (editor, started) {
    return function (e) {
        var ctrl = e.control;
        ctrl.disabled(!Storage.hasDraft(editor));
        editor.on('StoreDraft RestoreDraft RemoveDraft', function () {
            ctrl.disabled(!Storage.hasDraft(editor));
        });
        // TODO: Investigate why this is only done on postrender that would
        // make the feature broken if only the menu item was rendered since
        // it is rendered when the menu appears
        Storage.startStoreDraft(editor, started);
    };
};
var register = function (editor, started) {
    editor.addButton('restoredraft', {
        title: 'Restore last draft',
        onclick: function () {
            Storage.restoreLastDraft(editor);
        },
        onPostRender: postRender(editor, started)
    });
    editor.addMenuItem('restoredraft', {
        text: 'Restore last draft',
        onclick: function () {
            Storage.restoreLastDraft(editor);
        },
        onPostRender: postRender(editor, started),
        context: 'file'
    });
};
export { register };
//# sourceMappingURL=Buttons.js.map
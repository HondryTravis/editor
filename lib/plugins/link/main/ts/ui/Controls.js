/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Actions from '../core/Actions';
import Utils from '../core/Utils';
var setupButtons = function (editor) {
    editor.addButton('link', {
        active: false,
        icon: 'link',
        tooltip: 'Insert/edit link',
        onclick: Actions.openDialog(editor),
        onpostrender: Actions.toggleActiveState(editor)
    });
    editor.addButton('unlink', {
        active: false,
        icon: 'unlink',
        tooltip: 'Remove link',
        onclick: Utils.unlink(editor),
        onpostrender: Actions.toggleActiveState(editor)
    });
    if (editor.addContextToolbar) {
        editor.addButton('openlink', {
            icon: 'newtab',
            tooltip: 'Open link',
            onclick: Actions.gotoSelectedLink(editor)
        });
    }
};
var setupMenuItems = function (editor) {
    editor.addMenuItem('openlink', {
        text: 'Open link',
        icon: 'newtab',
        onclick: Actions.gotoSelectedLink(editor),
        onPostRender: Actions.toggleViewLinkState(editor),
        prependToContext: true
    });
    editor.addMenuItem('link', {
        icon: 'link',
        text: 'Link',
        shortcut: 'Meta+K',
        onclick: Actions.openDialog(editor),
        stateSelector: 'a[href]',
        context: 'insert',
        prependToContext: true
    });
    editor.addMenuItem('unlink', {
        icon: 'unlink',
        text: 'Remove link',
        onclick: Utils.unlink(editor),
        stateSelector: 'a[href]'
    });
};
var setupContextToolbars = function (editor) {
    if (editor.addContextToolbar) {
        editor.addContextToolbar(Actions.leftClickedOnAHref(editor), 'openlink | link unlink');
    }
};
export default {
    setupButtons: setupButtons,
    setupMenuItems: setupMenuItems,
    setupContextToolbars: setupContextToolbars
};
//# sourceMappingURL=Controls.js.map
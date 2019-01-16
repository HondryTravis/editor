/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Render from '../core/Render';
import NotificationManagerImpl from 'tinymce/ui/NotificationManagerImpl';
import WindowManagerImpl from 'tinymce/ui/WindowManagerImpl';
var get = function (editor, panel) {
    var renderUI = function () {
        return Render.renderUI(editor, panel);
    };
    return {
        renderUI: renderUI,
        getNotificationManagerImpl: function () {
            return NotificationManagerImpl(editor);
        },
        getWindowManagerImpl: function () {
            return WindowManagerImpl(editor);
        }
    };
};
export default {
    get: get
};
//# sourceMappingURL=ThemeApi.js.map
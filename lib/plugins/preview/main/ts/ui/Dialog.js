/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Env from 'tinymce/core/api/Env';
import Settings from '../api/Settings';
import IframeContent from './IframeContent';
var open = function (editor) {
    var sandbox = !Env.ie;
    var dialogHtml = '<iframe src="" frameborder="0"' + (sandbox ? ' sandbox="allow-scripts"' : '') + '></iframe>';
    var dialogWidth = Settings.getPreviewDialogWidth(editor);
    var dialogHeight = Settings.getPreviewDialogHeight(editor);
    editor.windowManager.open({
        title: 'Preview',
        width: dialogWidth,
        height: dialogHeight,
        html: dialogHtml,
        buttons: {
            text: 'Close',
            onclick: function (e) {
                e.control.parent().parent().close();
            }
        },
        onPostRender: function (e) {
            var iframeElm = e.control.getEl('body').firstChild;
            IframeContent.injectIframeContent(editor, iframeElm, sandbox);
        }
    });
};
export default {
    open: open
};
//# sourceMappingURL=Dialog.js.map
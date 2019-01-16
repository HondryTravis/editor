/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Actions from '../core/Actions';
var register = function (editor, clipboard, userIsInformedState) {
    editor.addCommand('mceTogglePlainTextPaste', function () {
        Actions.togglePlainTextPaste(editor, clipboard, userIsInformedState);
    });
    editor.addCommand('mceInsertClipboardContent', function (ui, value) {
        if (value.content) {
            clipboard.pasteHtml(value.content, value.internal);
        }
        if (value.text) {
            clipboard.pasteText(value.text);
        }
    });
};
export default {
    register: register
};
//# sourceMappingURL=Commands.js.map
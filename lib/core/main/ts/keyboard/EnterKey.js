/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import InsertNewLine from '../newline/InsertNewLine';
import VK from '../api/util/VK';
var endTypingLevel = function (undoManager) {
    if (undoManager.typing) {
        undoManager.typing = false;
        undoManager.add();
    }
};
var handleEnterKeyEvent = function (editor, event) {
    if (event.isDefaultPrevented()) {
        return;
    }
    event.preventDefault();
    endTypingLevel(editor.undoManager);
    editor.undoManager.transact(function () {
        if (editor.selection.isCollapsed() === false) {
            editor.execCommand('Delete');
        }
        InsertNewLine.insert(editor, event);
    });
};
var setup = function (editor) {
    editor.on('keydown', function (event) {
        if (event.keyCode === VK.ENTER) {
            handleEnterKeyEvent(editor, event);
        }
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=EnterKey.js.map
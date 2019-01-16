/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import ToggleList from '../actions/ToggleList';
import { indentListSelection, outdentListSelection, flattenListSelection } from '../actions/Indendation';
var queryListCommandState = function (editor, listName) {
    return function () {
        var parentList = editor.dom.getParent(editor.selection.getStart(), 'UL,OL,DL');
        return parentList && parentList.nodeName === listName;
    };
};
var register = function (editor) {
    editor.on('BeforeExecCommand', function (e) {
        var cmd = e.command.toLowerCase();
        if (cmd === 'indent') {
            indentListSelection(editor);
        }
        else if (cmd === 'outdent') {
            outdentListSelection(editor);
        }
    });
    editor.addCommand('InsertUnorderedList', function (ui, detail) {
        ToggleList.toggleList(editor, 'UL', detail);
    });
    editor.addCommand('InsertOrderedList', function (ui, detail) {
        ToggleList.toggleList(editor, 'OL', detail);
    });
    editor.addCommand('InsertDefinitionList', function (ui, detail) {
        ToggleList.toggleList(editor, 'DL', detail);
    });
    editor.addCommand('RemoveList', function () {
        flattenListSelection(editor);
    });
    editor.addQueryStateHandler('InsertUnorderedList', queryListCommandState(editor, 'UL'));
    editor.addQueryStateHandler('InsertOrderedList', queryListCommandState(editor, 'OL'));
    editor.addQueryStateHandler('InsertDefinitionList', queryListCommandState(editor, 'DL'));
};
export default {
    register: register
};
//# sourceMappingURL=Commands.js.map
/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
import { getToolbar } from '../api/Settings';
var addButtons = function (editor) {
    editor.addButton('table', {
        type: 'menubutton',
        title: 'Table',
        // tslint:disable-next-line:no-string-literal
        menu: editor.menuItems['inserttable'].menu
    });
    function cmd(command) {
        return function () {
            editor.execCommand(command);
        };
    }
    editor.addButton('tableprops', {
        title: 'Table properties',
        onclick: cmd('mceTableProps'),
        icon: 'table'
    });
    editor.addButton('tabledelete', {
        title: 'Delete table',
        onclick: cmd('mceTableDelete')
    });
    editor.addButton('tablecellprops', {
        title: 'Cell properties',
        onclick: cmd('mceTableCellProps')
    });
    editor.addButton('tablemergecells', {
        title: 'Merge cells',
        onclick: cmd('mceTableMergeCells')
    });
    editor.addButton('tablesplitcells', {
        title: 'Split cell',
        onclick: cmd('mceTableSplitCells')
    });
    editor.addButton('tableinsertrowbefore', {
        title: 'Insert row before',
        onclick: cmd('mceTableInsertRowBefore')
    });
    editor.addButton('tableinsertrowafter', {
        title: 'Insert row after',
        onclick: cmd('mceTableInsertRowAfter')
    });
    editor.addButton('tabledeleterow', {
        title: 'Delete row',
        onclick: cmd('mceTableDeleteRow')
    });
    editor.addButton('tablerowprops', {
        title: 'Row properties',
        onclick: cmd('mceTableRowProps')
    });
    editor.addButton('tablecutrow', {
        title: 'Cut row',
        onclick: cmd('mceTableCutRow')
    });
    editor.addButton('tablecopyrow', {
        title: 'Copy row',
        onclick: cmd('mceTableCopyRow')
    });
    editor.addButton('tablepasterowbefore', {
        title: 'Paste row before',
        onclick: cmd('mceTablePasteRowBefore')
    });
    editor.addButton('tablepasterowafter', {
        title: 'Paste row after',
        onclick: cmd('mceTablePasteRowAfter')
    });
    editor.addButton('tableinsertcolbefore', {
        title: 'Insert column before',
        onclick: cmd('mceTableInsertColBefore')
    });
    editor.addButton('tableinsertcolafter', {
        title: 'Insert column after',
        onclick: cmd('mceTableInsertColAfter')
    });
    editor.addButton('tabledeletecol', {
        title: 'Delete column',
        onclick: cmd('mceTableDeleteCol')
    });
};
var addToolbars = function (editor) {
    var isTable = function (table) {
        var selectorMatched = editor.dom.is(table, 'table') && editor.getBody().contains(table);
        return selectorMatched;
    };
    var toolbar = getToolbar(editor);
    if (toolbar.length > 0) {
        editor.addContextToolbar(isTable, toolbar.join(' '));
    }
};
export default {
    addButtons: addButtons,
    addToolbars: addToolbars
};
//# sourceMappingURL=Buttons.js.map
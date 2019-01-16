/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Fun, Option } from '@ephox/katamari';
import { CopyRows, TableFill, TableLookup } from '@ephox/snooker';
import { Element, Insert, Remove, Replication } from '@ephox/sugar';
import Tools from 'tinymce/core/api/util/Tools';
import * as Util from '../alien/Util';
import TableTargets from '../queries/TableTargets';
import CellDialog from '../ui/CellDialog';
import RowDialog from '../ui/RowDialog';
import TableDialog from '../ui/TableDialog';
import * as Events from '../api/Events';
var each = Tools.each;
var registerCommands = function (editor, actions, cellSelection, selections, clipboardRows) {
    var isRoot = Util.getIsRoot(editor);
    var eraseTable = function () {
        var cell = Element.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
        var table = TableLookup.table(cell, isRoot);
        table.filter(Fun.not(isRoot)).each(function (table) {
            var cursor = Element.fromText('');
            Insert.after(table, cursor);
            Remove.remove(table);
            var rng = editor.dom.createRng();
            rng.setStart(cursor.dom(), 0);
            rng.setEnd(cursor.dom(), 0);
            editor.selection.setRng(rng);
        });
    };
    var getSelectionStartCell = function () {
        return Element.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
    };
    var getTableFromCell = function (cell) {
        return TableLookup.table(cell, isRoot);
    };
    var getSize = function (table) {
        return {
            width: Util.getPixelWidth(table.dom()),
            height: Util.getPixelWidth(table.dom())
        };
    };
    var resizeChange = function (editor, oldSize, table) {
        var newSize = getSize(table);
        if (oldSize.width !== newSize.width || oldSize.height !== newSize.height) {
            Events.fireObjectResizeStart(editor, table.dom(), oldSize.width, oldSize.height);
            Events.fireObjectResized(editor, table.dom(), newSize.width, newSize.height);
        }
    };
    var actOnSelection = function (execute) {
        var cell = getSelectionStartCell();
        var table = getTableFromCell(cell);
        table.each(function (table) {
            var targets = TableTargets.forMenu(selections, table, cell);
            var beforeSize = getSize(table);
            execute(table, targets).each(function (rng) {
                resizeChange(editor, beforeSize, table);
                editor.selection.setRng(rng);
                editor.focus();
                cellSelection.clear(table);
                Util.removeDataStyle(table);
            });
        });
    };
    var copyRowSelection = function (execute) {
        var cell = getSelectionStartCell();
        var table = getTableFromCell(cell);
        return table.bind(function (table) {
            var doc = Element.fromDom(editor.getDoc());
            var targets = TableTargets.forMenu(selections, table, cell);
            var generators = TableFill.cellOperations(Fun.noop, doc, Option.none());
            return CopyRows.copyRows(table, targets, generators);
        });
    };
    var pasteOnSelection = function (execute) {
        // If we have clipboard rows to paste
        clipboardRows.get().each(function (rows) {
            var clonedRows = Arr.map(rows, function (row) {
                return Replication.deep(row);
            });
            var cell = getSelectionStartCell();
            var table = getTableFromCell(cell);
            table.bind(function (table) {
                var doc = Element.fromDom(editor.getDoc());
                var generators = TableFill.paste(doc);
                var targets = TableTargets.pasteRows(selections, table, cell, clonedRows, generators);
                execute(table, targets).each(function (rng) {
                    editor.selection.setRng(rng);
                    editor.focus();
                    cellSelection.clear(table);
                });
            });
        });
    };
    // Register action commands
    each({
        mceTableSplitCells: function () {
            actOnSelection(actions.unmergeCells);
        },
        mceTableMergeCells: function () {
            actOnSelection(actions.mergeCells);
        },
        mceTableInsertRowBefore: function () {
            actOnSelection(actions.insertRowsBefore);
        },
        mceTableInsertRowAfter: function () {
            actOnSelection(actions.insertRowsAfter);
        },
        mceTableInsertColBefore: function () {
            actOnSelection(actions.insertColumnsBefore);
        },
        mceTableInsertColAfter: function () {
            actOnSelection(actions.insertColumnsAfter);
        },
        mceTableDeleteCol: function () {
            actOnSelection(actions.deleteColumn);
        },
        mceTableDeleteRow: function () {
            actOnSelection(actions.deleteRow);
        },
        mceTableCutRow: function (grid) {
            clipboardRows.set(copyRowSelection());
            actOnSelection(actions.deleteRow);
        },
        mceTableCopyRow: function (grid) {
            clipboardRows.set(copyRowSelection());
        },
        mceTablePasteRowBefore: function (grid) {
            pasteOnSelection(actions.pasteRowsBefore);
        },
        mceTablePasteRowAfter: function (grid) {
            pasteOnSelection(actions.pasteRowsAfter);
        },
        mceTableDelete: eraseTable
    }, function (func, name) {
        editor.addCommand(name, func);
    });
    // Register dialog commands
    each({
        mceInsertTable: Fun.curry(TableDialog.open, editor),
        mceTableProps: Fun.curry(TableDialog.open, editor, true),
        mceTableRowProps: Fun.curry(RowDialog.open, editor),
        mceTableCellProps: Fun.curry(CellDialog.open, editor)
    }, function (func, name) {
        editor.addCommand(name, function (ui, val) {
            func(val);
        });
    });
};
export default {
    registerCommands: registerCommands
};
//# sourceMappingURL=Commands.js.map
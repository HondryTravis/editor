/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun, Arr, Type } from '@ephox/katamari';
import { TableRender } from '@ephox/snooker';
import { Attr, Html, SelectorFind, SelectorFilter, Css } from '@ephox/sugar';
import { getDefaultAttributes, getDefaultStyles, isPixelsForced } from '../api/Settings';
import { fireNewRow, fireNewCell } from '../api/Events';
import * as Util from '../alien/Util';
var placeCaretInCell = function (editor, cell) {
    editor.selection.select(cell.dom(), true);
    editor.selection.collapse(true);
};
var selectFirstCellInTable = function (editor, tableElm) {
    SelectorFind.descendant(tableElm, 'td,th').each(Fun.curry(placeCaretInCell, editor));
};
var fireEvents = function (editor, table) {
    Arr.each(SelectorFilter.descendants(table, 'tr'), function (row) {
        fireNewRow(editor, row.dom());
        Arr.each(SelectorFilter.descendants(row, 'th,td'), function (cell) {
            fireNewCell(editor, cell.dom());
        });
    });
};
var isPercentage = function (width) { return Type.isString(width) && width.indexOf('%') !== -1; };
var insert = function (editor, columns, rows) {
    var defaultStyles = getDefaultStyles(editor);
    var options = {
        styles: defaultStyles,
        attributes: getDefaultAttributes(editor),
        percentages: isPercentage(defaultStyles.width) && !isPixelsForced(editor)
    };
    var table = TableRender.render(rows, columns, 0, 0, options);
    Attr.set(table, 'data-mce-id', '__mce');
    var html = Html.getOuter(table);
    editor.insertContent(html);
    return SelectorFind.descendant(Util.getBody(editor), 'table[data-mce-id="__mce"]').map(function (table) {
        if (isPixelsForced(editor)) {
            Css.set(table, 'width', Css.get(table, 'width'));
        }
        Attr.remove(table, 'data-mce-id');
        fireEvents(editor, table);
        selectFirstCellInTable(editor, table);
        return table.dom();
    }).getOr(null);
};
export default {
    insert: insert
};
//# sourceMappingURL=InsertTable.js.map
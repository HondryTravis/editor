/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import InsertTable from '../actions/InsertTable';
import { Arr, Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
var getClipboardRows = function (clipboardRows) {
    return clipboardRows.get().fold(function () {
        return;
    }, function (rows) {
        return Arr.map(rows, function (row) {
            return row.dom();
        });
    });
};
var setClipboardRows = function (rows, clipboardRows) {
    var sugarRows = Arr.map(rows, Element.fromDom);
    clipboardRows.set(Option.from(sugarRows));
};
var getApi = function (editor, clipboardRows) {
    return {
        insertTable: function (columns, rows) {
            return InsertTable.insert(editor, columns, rows);
        },
        setClipboardRows: function (rows) { return setClipboardRows(rows, clipboardRows); },
        getClipboardRows: function () { return getClipboardRows(clipboardRows); }
    };
};
export { getApi };
//# sourceMappingURL=Api.js.map
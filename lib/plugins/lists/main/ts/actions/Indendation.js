/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { Compare, Element, Replication, Traverse } from '@ephox/sugar';
import Range from '../core/Range';
import Selection from '../core/Selection';
import SplitList from '../core/SplitList';
import { listsIndentation } from '../listModel/ListsIndendation';
var outdentDlItem = function (editor, item) {
    if (Compare.is(item, 'DD')) {
        Replication.mutate(item, 'DT');
    }
    else if (Compare.is(item, 'DT')) {
        Traverse.parent(item).each(function (dl) { return SplitList.splitList(editor, dl.dom(), item.dom()); });
    }
};
var indentDlItem = function (item) {
    if (Compare.is(item, 'DT')) {
        Replication.mutate(item, 'DD');
    }
};
var dlIndentation = function (editor, indentation, dlItems) {
    if (indentation === "Indent" /* Indent */) {
        Arr.each(dlItems, indentDlItem);
    }
    else {
        Arr.each(dlItems, function (item) { return outdentDlItem(editor, item); });
    }
};
var selectionIndentation = function (editor, indentation) {
    var dlItems = Arr.map(Selection.getSelectedDlItems(editor), Element.fromDom);
    var lists = Arr.map(Selection.getSelectedListRoots(editor), Element.fromDom);
    if (dlItems.length || lists.length) {
        var bookmark = editor.selection.getBookmark();
        dlIndentation(editor, indentation, dlItems);
        listsIndentation(editor, lists, indentation);
        editor.selection.moveToBookmark(bookmark);
        editor.selection.setRng(Range.normalizeRange(editor.selection.getRng()));
        editor.nodeChanged();
    }
};
var indentListSelection = function (editor) {
    selectionIndentation(editor, "Indent" /* Indent */);
};
var outdentListSelection = function (editor) {
    selectionIndentation(editor, "Outdent" /* Outdent */);
};
var flattenListSelection = function (editor) {
    selectionIndentation(editor, "Flatten" /* Flatten */);
};
export { indentListSelection, outdentListSelection, flattenListSelection };
//# sourceMappingURL=Indendation.js.map
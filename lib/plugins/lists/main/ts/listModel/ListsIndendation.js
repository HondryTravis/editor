/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Fun, Options } from '@ephox/katamari';
import { Element, Fragment, InsertAll, Remove } from '@ephox/sugar';
import Selection from '../core/Selection';
import TextBlock from '../core/TextBlock';
import { composeList } from './ComposeList';
import { isIndented, isSelected } from './Entry';
import { indentEntry } from './Indentation';
import { normalizeEntries } from './NormalizeEntries';
import { parseLists } from './ParseLists';
import { hasFirstChildList } from './Util';
var outdentedComposer = function (editor, entries) {
    return Arr.map(entries, function (entry) {
        var content = Fragment.fromElements(entry.content);
        return Element.fromDom(TextBlock.createNewTextBlock(editor, content.dom()));
    });
};
var indentedComposer = function (editor, entries) {
    normalizeEntries(entries);
    return composeList(editor.contentDocument, entries).toArray();
};
var composeEntries = function (editor, entries) {
    return Arr.bind(Arr.groupBy(entries, isIndented), function (entries) {
        var groupIsIndented = Arr.head(entries).map(isIndented).getOr(false);
        return groupIsIndented ? indentedComposer(editor, entries) : outdentedComposer(editor, entries);
    });
};
var indentSelectedEntries = function (entries, indentation) {
    Arr.each(Arr.filter(entries, isSelected), function (entry) { return indentEntry(indentation, entry); });
};
var getItemSelection = function (editor) {
    var selectedListItems = Arr.map(Selection.getSelectedListItems(editor), Element.fromDom);
    return Options.liftN([
        Arr.find(selectedListItems, Fun.not(hasFirstChildList)),
        Arr.find(Arr.reverse(selectedListItems), Fun.not(hasFirstChildList))
    ], function (start, end) { return ({ start: start, end: end }); });
};
var listsIndentation = function (editor, lists, indentation) {
    var parsedLists = parseLists(lists, getItemSelection(editor));
    Arr.each(parsedLists, function (entrySet) {
        indentSelectedEntries(entrySet.entries, indentation);
        InsertAll.before(entrySet.sourceList, composeEntries(editor, entrySet.entries));
        Remove.remove(entrySet.sourceList);
    });
};
export { listsIndentation };
//# sourceMappingURL=ListsIndendation.js.map
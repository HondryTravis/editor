/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Cell, Fun } from '@ephox/katamari';
import { Attr, Compare, Replication, Traverse } from '@ephox/sugar';
import { getListType, isList, ListType } from './ListType';
import { hasLastChildList } from './Util';
var getItemContent = function (li) {
    var childNodes = Traverse.children(li);
    var contentLength = childNodes.length + (hasLastChildList(li) ? -1 : 0);
    return Arr.map(childNodes.slice(0, contentLength), Replication.deep);
};
var createEntry = function (li, depth, isSelected) {
    var list = Traverse.parent(li);
    return {
        depth: depth,
        isSelected: isSelected,
        content: getItemContent(li),
        listType: list.bind(getListType).getOr(ListType.OL),
        listAttributes: list.map(Attr.clone).getOr({}),
        itemAttributes: Attr.clone(li)
    };
};
var parseItem = function (depth, itemSelection, selectionState, item) {
    var curriedParseList = Fun.curry(parseList, depth, itemSelection, selectionState);
    var updateSelectionState = function (itemRange) { return itemSelection.each(function (selection) {
        if (Compare.eq(itemRange === "Start" /* Start */ ? selection.start : selection.end, item)) {
            selectionState.set(itemRange === "Start" /* Start */);
        }
    }); };
    return Traverse.firstChild(item).filter(isList).fold(function () {
        updateSelectionState("Start" /* Start */);
        var fromCurrentItem = createEntry(item, depth, selectionState.get());
        updateSelectionState("End" /* End */);
        var fromChildList = Traverse.lastChild(item).filter(isList).map(curriedParseList).getOr([]);
        return [fromCurrentItem].concat(fromChildList);
    }, curriedParseList);
};
var parseList = function (depth, itemSelection, selectionState, list) {
    var newDepth = depth + 1;
    return Arr.bind(Traverse.children(list), function (child) {
        return isList(child) ? parseList(newDepth, itemSelection, selectionState, child) : parseItem(newDepth, itemSelection, selectionState, child);
    });
};
var parseLists = function (lists, itemSelection) {
    var selectionState = Cell(false);
    var initialDepth = 0;
    return Arr.map(lists, function (list) { return ({
        entries: parseList(initialDepth, itemSelection, selectionState, list),
        sourceList: list
    }); });
};
export { parseLists };
//# sourceMappingURL=ParseLists.js.map
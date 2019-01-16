/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { HTMLElement } from '@ephox/sand';
import DomQuery from 'tinymce/core/api/dom/DomQuery';
import Tools from 'tinymce/core/api/util/Tools';
import NodeType from './NodeType';
var getParentList = function (editor) {
    var selectionStart = editor.selection.getStart(true);
    return editor.dom.getParent(selectionStart, 'OL,UL,DL', getClosestListRootElm(editor, selectionStart));
};
var isParentListSelected = function (parentList, selectedBlocks) {
    return parentList && selectedBlocks.length === 1 && selectedBlocks[0] === parentList;
};
var findSubLists = function (parentList) {
    return Tools.grep(parentList.querySelectorAll('ol,ul,dl'), function (elm) {
        return NodeType.isListNode(elm);
    });
};
var getSelectedSubLists = function (editor) {
    var parentList = getParentList(editor);
    var selectedBlocks = editor.selection.getSelectedBlocks();
    if (isParentListSelected(parentList, selectedBlocks)) {
        return findSubLists(parentList);
    }
    else {
        return Tools.grep(selectedBlocks, function (elm) {
            return NodeType.isListNode(elm) && parentList !== elm;
        });
    }
};
var findParentListItemsNodes = function (editor, elms) {
    var listItemsElms = Tools.map(elms, function (elm) {
        var parentLi = editor.dom.getParent(elm, 'li,dd,dt', getClosestListRootElm(editor, elm));
        return parentLi ? parentLi : elm;
    });
    return DomQuery.unique(listItemsElms);
};
var getSelectedListItems = function (editor) {
    var selectedBlocks = editor.selection.getSelectedBlocks();
    return Tools.grep(findParentListItemsNodes(editor, selectedBlocks), function (block) {
        return NodeType.isListItemNode(block);
    });
};
var getSelectedDlItems = function (editor) {
    return Arr.filter(getSelectedListItems(editor), NodeType.isDlItemNode);
};
var getClosestListRootElm = function (editor, elm) {
    var parentTableCell = editor.dom.getParents(elm, 'TD,TH');
    var root = parentTableCell.length > 0 ? parentTableCell[0] : editor.getBody();
    return root;
};
var findLastParentListNode = function (editor, elm) {
    var parentLists = editor.dom.getParents(elm, 'ol,ul', getClosestListRootElm(editor, elm));
    return Arr.last(parentLists);
};
var getSelectedLists = function (editor) {
    var firstList = findLastParentListNode(editor, editor.selection.getStart());
    var subsequentLists = Arr.filter(editor.selection.getSelectedBlocks(), NodeType.isOlUlNode);
    return firstList.toArray().concat(subsequentLists);
};
var getSelectedListRoots = function (editor) {
    var selectedLists = getSelectedLists(editor);
    return getUniqueListRoots(editor, selectedLists);
};
var getUniqueListRoots = function (editor, lists) {
    var listRoots = Arr.map(lists, function (list) { return findLastParentListNode(editor, list).getOr(list); });
    return DomQuery.unique(listRoots);
};
var isList = function (editor) {
    var list = getParentList(editor);
    return HTMLElement.isPrototypeOf(list);
};
export default {
    isList: isList,
    getParentList: getParentList,
    getSelectedSubLists: getSelectedSubLists,
    getSelectedListItems: getSelectedListItems,
    getClosestListRootElm: getClosestListRootElm,
    getSelectedDlItems: getSelectedDlItems,
    getSelectedListRoots: getSelectedListRoots
};
//# sourceMappingURL=Selection.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { Element, SelectorFilter } from '@ephox/sugar';
import * as ElementType from '../dom/ElementType';
import MultiRange from './MultiRange';
var getCellsFromRanges = function (ranges) {
    return Arr.filter(MultiRange.getSelectedNodes(ranges), ElementType.isTableCell);
};
var getCellsFromElement = function (elm) {
    var selectedCells = SelectorFilter.descendants(elm, 'td[data-mce-selected],th[data-mce-selected]');
    return selectedCells;
};
var getCellsFromElementOrRanges = function (ranges, element) {
    var selectedCells = getCellsFromElement(element);
    var rangeCells = getCellsFromRanges(ranges);
    return selectedCells.length > 0 ? selectedCells : rangeCells;
};
var getCellsFromEditor = function (editor) {
    return getCellsFromElementOrRanges(MultiRange.getRanges(editor.selection.getSel()), Element.fromDom(editor.getBody()));
};
export default {
    getCellsFromRanges: getCellsFromRanges,
    getCellsFromElement: getCellsFromElement,
    getCellsFromElementOrRanges: getCellsFromElementOrRanges,
    getCellsFromEditor: getCellsFromEditor
};
//# sourceMappingURL=TableCellSelection.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { TableSelection } from '@ephox/darwin';
import { Arr, Fun, Option } from '@ephox/katamari';
import { Attr } from '@ephox/sugar';
import Ephemera from '../selection/Ephemera';
import SelectionTypes from '../selection/SelectionTypes';
// Return an array of the selected elements
var selection = function (cell, selections) {
    return SelectionTypes.cata(selections.get(), Fun.constant([]), Fun.identity, Fun.constant([cell]));
};
var unmergable = function (cell, selections) {
    var hasSpan = function (elem) {
        return (Attr.has(elem, 'rowspan') && parseInt(Attr.get(elem, 'rowspan'), 10) > 1) ||
            (Attr.has(elem, 'colspan') && parseInt(Attr.get(elem, 'colspan'), 10) > 1);
    };
    var candidates = selection(cell, selections);
    return candidates.length > 0 && Arr.forall(candidates, hasSpan) ? Option.some(candidates) : Option.none();
};
var mergable = function (table, selections) {
    return SelectionTypes.cata(selections.get(), Option.none, function (cells, _env) {
        if (cells.length === 0) {
            return Option.none();
        }
        return TableSelection.retrieveBox(table, Ephemera.firstSelectedSelector(), Ephemera.lastSelectedSelector()).bind(function (bounds) {
            return cells.length > 1 ? Option.some({
                bounds: Fun.constant(bounds),
                cells: Fun.constant(cells)
            }) : Option.none();
        });
    }, Option.none);
};
export default {
    mergable: mergable,
    unmergable: unmergable,
    selection: selection
};
//# sourceMappingURL=CellOperations.js.map
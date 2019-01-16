/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Fun, Option } from '@ephox/katamari';
import { CopySelected, TableFill, TableLookup } from '@ephox/snooker';
import { Element, Elements, Node, Replication } from '@ephox/sugar';
import TableTargets from '../queries/TableTargets';
import Ephemera from '../selection/Ephemera';
import SelectionTypes from '../selection/SelectionTypes';
var extractSelected = function (cells) {
    // Assume for now that we only have one table (also handles the case where we multi select outside a table)
    return TableLookup.table(cells[0]).map(Replication.deep).map(function (replica) {
        return [CopySelected.extract(replica, Ephemera.attributeSelector())];
    });
};
var serializeElements = function (editor, elements) {
    return Arr.map(elements, function (elm) { return editor.selection.serializer.serialize(elm.dom(), {}); }).join('');
};
var getTextContent = function (elements) {
    return Arr.map(elements, function (element) { return element.dom().innerText; }).join('');
};
var registerEvents = function (editor, selections, actions, cellSelection) {
    editor.on('BeforeGetContent', function (e) {
        var multiCellContext = function (cells) {
            e.preventDefault();
            extractSelected(cells).each(function (elements) {
                e.content = e.format === 'text' ? getTextContent(elements) : serializeElements(editor, elements);
            });
        };
        if (e.selection === true) {
            SelectionTypes.cata(selections.get(), Fun.noop, multiCellContext, Fun.noop);
        }
    });
    editor.on('BeforeSetContent', function (e) {
        if (e.selection === true && e.paste === true) {
            var cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
            cellOpt.each(function (domCell) {
                var cell = Element.fromDom(domCell);
                var table = TableLookup.table(cell);
                table.bind(function (table) {
                    var elements = Arr.filter(Elements.fromHtml(e.content), function (content) {
                        return Node.name(content) !== 'meta';
                    });
                    if (elements.length === 1 && Node.name(elements[0]) === 'table') {
                        e.preventDefault();
                        var doc = Element.fromDom(editor.getDoc());
                        var generators = TableFill.paste(doc);
                        var targets = TableTargets.paste(cell, elements[0], generators);
                        actions.pasteCells(table, targets).each(function (rng) {
                            editor.selection.setRng(rng);
                            editor.focus();
                            cellSelection.clear(table);
                        });
                    }
                });
            });
        }
    });
};
export default {
    registerEvents: registerEvents
};
//# sourceMappingURL=Clipboard.js.map
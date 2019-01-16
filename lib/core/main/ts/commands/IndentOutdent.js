/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { isListItem, isList } from '../dom/ElementType';
import { Element, Traverse } from '@ephox/sugar';
var indentElement = function (dom, command, useMargin, value, unit, element) {
    if (dom.getContentEditable(element) === 'false') {
        return;
    }
    var indentStyleName = useMargin ? 'margin' : 'padding';
    indentStyleName = element.nodeName === 'TABLE' ? 'margin' : indentStyleName;
    indentStyleName += dom.getStyle(element, 'direction', true) === 'rtl' ? 'Right' : 'Left';
    if (command === 'outdent') {
        var styleValue = Math.max(0, parseInt(element.style[indentStyleName] || 0, 10) - value);
        dom.setStyle(element, indentStyleName, styleValue ? styleValue + unit : '');
    }
    else {
        var styleValue = (parseInt(element.style[indentStyleName] || 0, 10) + value) + unit;
        dom.setStyle(element, indentStyleName, styleValue);
    }
};
var isListComponent = function (el) {
    return isList(el) || isListItem(el);
};
var parentIsListComponent = function (el) {
    return Traverse.parent(el).map(isListComponent).getOr(false);
};
var getBlocksToIndent = function (editor) {
    return Arr.filter(Arr.map(editor.selection.getSelectedBlocks(), Element.fromDom), function (el) {
        return !isListComponent(el) && !parentIsListComponent(el);
    });
};
export var handle = function (editor, command) {
    var settings = editor.settings, dom = editor.dom, selection = editor.selection, formatter = editor.formatter;
    var indentUnit = /[a-z%]+$/i.exec(settings.indentation)[0];
    var indentValue = parseInt(settings.indentation, 10);
    var useMargin = editor.getParam('indent_use_margin', false);
    // If forced_root_blocks is set to false we don't have a block to indent so lets create a div
    if (!editor.queryCommandState('InsertUnorderedList') && !editor.queryCommandState('InsertOrderedList')) {
        if (!settings.forced_root_block && !dom.getParent(selection.getNode(), dom.isBlock)) {
            formatter.apply('div');
        }
    }
    Arr.each(getBlocksToIndent(editor), function (block) {
        indentElement(dom, command, useMargin, indentValue, indentUnit, block.dom());
    });
};
//# sourceMappingURL=IndentOutdent.js.map
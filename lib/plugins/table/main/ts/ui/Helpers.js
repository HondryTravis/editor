/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import Tools from 'tinymce/core/api/util/Tools';
import * as Util from '../alien/Util';
import { getColorPickerCallback } from '../api/Settings';
import { document } from '@ephox/dom-globals';
/**
 * @class tinymce.table.ui.Helpers
 * @private
 */
var buildListItems = function (inputList, itemCallback, startItems) {
    var appendItems = function (values, output) {
        output = output || [];
        Tools.each(values, function (item) {
            var menuItem = { text: item.text || item.title };
            if (item.menu) {
                menuItem.menu = appendItems(item.menu);
            }
            else {
                menuItem.value = item.value;
                if (itemCallback) {
                    itemCallback(menuItem);
                }
            }
            output.push(menuItem);
        });
        return output;
    };
    return appendItems(inputList, startItems || []);
};
function styleFieldHasFocus(e) {
    return e.control.rootControl.find('#style')[0].getEl().isEqualNode(document.activeElement);
}
var syncAdvancedStyleFields = function (editor, evt) {
    if (styleFieldHasFocus(evt)) {
        updateAdvancedFields(editor, evt);
    }
    else {
        updateStyleField(editor, evt);
    }
};
var updateStyleField = function (editor, evt) {
    var dom = editor.dom;
    var rootControl = evt.control.rootControl;
    var data = rootControl.toJSON();
    var css = dom.parseStyle(data.style);
    css['border-style'] = data.borderStyle;
    css['border-color'] = data.borderColor;
    css['background-color'] = data.backgroundColor;
    css.width = data.width ? Util.addSizeSuffix(data.width) : '';
    css.height = data.height ? Util.addSizeSuffix(data.height) : '';
    rootControl.find('#style').value(dom.serializeStyle(dom.parseStyle(dom.serializeStyle(css))));
};
var updateAdvancedFields = function (editor, evt) {
    var dom = editor.dom;
    var rootControl = evt.control.rootControl;
    var data = rootControl.toJSON();
    var css = dom.parseStyle(data.style);
    rootControl.find('#borderStyle').value(css['border-style'] || '');
    rootControl.find('#borderColor').value(css['border-color'] || '');
    rootControl.find('#backgroundColor').value(css['background-color'] || '');
    rootControl.find('#width').value(css.width || '');
    rootControl.find('#height').value(css.height || '');
};
var extractAdvancedStyles = function (dom, elm) {
    var css = dom.parseStyle(dom.getAttrib(elm, 'style'));
    var data = {};
    if (css['border-style']) {
        data.borderStyle = css['border-style'];
    }
    if (css['border-color']) {
        data.borderColor = css['border-color'];
    }
    if (css['background-color']) {
        data.backgroundColor = css['background-color'];
    }
    data.style = dom.serializeStyle(css);
    return data;
};
var createStyleForm = function (editor) {
    var createColorPickAction = function () {
        var colorPickerCallback = getColorPickerCallback(editor);
        if (colorPickerCallback) {
            return function (evt) {
                return colorPickerCallback.call(editor, function (value) {
                    evt.control.value(value).fire('change');
                }, evt.control.value());
            };
        }
    };
    return {
        title: 'Advanced',
        type: 'form',
        defaults: {
            onchange: Fun.curry(updateStyleField, editor)
        },
        items: [
            {
                label: 'Style',
                name: 'style',
                type: 'textbox',
                onchange: Fun.curry(updateAdvancedFields, editor)
            },
            {
                type: 'form',
                padding: 0,
                formItemDefaults: {
                    layout: 'grid',
                    alignH: ['start', 'right']
                },
                defaults: {
                    size: 7
                },
                items: [
                    {
                        label: 'Border style',
                        type: 'listbox',
                        name: 'borderStyle',
                        width: 90,
                        onselect: Fun.curry(updateStyleField, editor),
                        values: [
                            { text: 'Select...', value: '' },
                            { text: 'Solid', value: 'solid' },
                            { text: 'Dotted', value: 'dotted' },
                            { text: 'Dashed', value: 'dashed' },
                            { text: 'Double', value: 'double' },
                            { text: 'Groove', value: 'groove' },
                            { text: 'Ridge', value: 'ridge' },
                            { text: 'Inset', value: 'inset' },
                            { text: 'Outset', value: 'outset' },
                            { text: 'None', value: 'none' },
                            { text: 'Hidden', value: 'hidden' }
                        ]
                    },
                    {
                        label: 'Border color',
                        type: 'colorbox',
                        name: 'borderColor',
                        onaction: createColorPickAction()
                    },
                    {
                        label: 'Background color',
                        type: 'colorbox',
                        name: 'backgroundColor',
                        onaction: createColorPickAction()
                    }
                ]
            }
        ]
    };
};
export default {
    createStyleForm: createStyleForm,
    buildListItems: buildListItems,
    updateStyleField: updateStyleField,
    extractAdvancedStyles: extractAdvancedStyles,
    updateAdvancedFields: updateAdvancedFields,
    syncAdvancedStyleFields: syncAdvancedStyleFields
};
//# sourceMappingURL=Helpers.js.map
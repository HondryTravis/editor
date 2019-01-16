/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
import Factory from 'tinymce/core/api/ui/Factory';
import Type from '../alien/Type';
var getSelectorStateResult = function (itemName, item) {
    var result = function (selector, handler) {
        return {
            selector: selector,
            handler: handler
        };
    };
    var activeHandler = function (state) {
        item.active(state);
    };
    var disabledHandler = function (state) {
        item.disabled(state);
    };
    if (item.settings.stateSelector) {
        return result(item.settings.stateSelector, activeHandler);
    }
    if (item.settings.disabledStateSelector) {
        return result(item.settings.disabledStateSelector, disabledHandler);
    }
    return null;
};
var bindSelectorChanged = function (editor, itemName, item) {
    return function () {
        var result = getSelectorStateResult(itemName, item);
        if (result !== null) {
            editor.selection.selectorChanged(result.selector, result.handler);
        }
    };
};
var itemsToArray = function (items) {
    if (Type.isArray(items)) {
        return items;
    }
    else if (Type.isString(items)) {
        return items.split(/[ ,]/);
    }
    return [];
};
var create = function (editor, name, items) {
    var toolbarItems = [];
    var buttonGroup;
    if (!items) {
        return;
    }
    Tools.each(itemsToArray(items), function (item) {
        if (item === '|') {
            buttonGroup = null;
        }
        else {
            if (editor.buttons[item]) {
                if (!buttonGroup) {
                    buttonGroup = { type: 'buttongroup', items: [] };
                    toolbarItems.push(buttonGroup);
                }
                var button = editor.buttons[item];
                if (Type.isFunction(button)) {
                    button = button();
                }
                button.type = button.type || 'button';
                button = Factory.create(button);
                button.on('postRender', bindSelectorChanged(editor, item, button));
                buttonGroup.items.push(button);
            }
        }
    });
    return Factory.create({
        type: 'toolbar',
        layout: 'flow',
        name: name,
        items: toolbarItems
    });
};
export default {
    create: create
};
//# sourceMappingURL=Toolbar.js.map
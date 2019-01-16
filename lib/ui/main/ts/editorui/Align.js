/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
import * as FormatUtils from './FormatUtils';
var register = function (editor) {
    var alignFormats = ['alignleft', 'aligncenter', 'alignright', 'alignjustify'];
    var defaultAlign = 'alignleft';
    var alignMenuItems = [
        { text: 'Left', icon: 'alignleft', onclick: FormatUtils.toggleFormat(editor, 'alignleft'), shortcut: 'Meta+L' },
        { text: 'Center', icon: 'aligncenter', onclick: FormatUtils.toggleFormat(editor, 'aligncenter'), shortcut: 'Meta+E' },
        { text: 'Right', icon: 'alignright', onclick: FormatUtils.toggleFormat(editor, 'alignright'), shortcut: 'Meta+R' },
        { text: 'Justify', icon: 'alignjustify', onclick: FormatUtils.toggleFormat(editor, 'alignjustify'), shortcut: 'Meta+J' }
    ];
    editor.addMenuItem('align', {
        text: 'Align',
        menu: alignMenuItems.concat([
            {
                text: 'Increase indent',
                icon: 'indent',
                shortcut: 'Meta+M',
                onclick: function () {
                    editor.execCommand('Indent');
                }
            },
            {
                text: 'Decrease indent',
                icon: 'outdent',
                shortcut: 'Meta+Shift+M',
                onclick: function () {
                    editor.execCommand('Outdent');
                }
            }
        ])
    });
    editor.addButton('align', {
        type: 'menubutton',
        icon: defaultAlign,
        menu: alignMenuItems,
        onShowMenu: function (e) {
            var menu = e.control.menu;
            Tools.each(alignFormats, function (formatName, idx) {
                menu.items().eq(idx).each(function (item) { return item.active(editor.formatter.match(formatName)); });
            });
        },
        onPostRender: function (e) {
            var ctrl = e.control;
            Tools.each(alignFormats, function (formatName, idx) {
                FormatUtils.addFormatChangedListener(editor, formatName, function (state) {
                    ctrl.icon(defaultAlign);
                    if (state) {
                        ctrl.icon(formatName);
                    }
                });
            });
        }
    });
    Tools.each({
        alignleft: ['Align left', 'JustifyLeft'],
        aligncenter: ['Align center', 'JustifyCenter'],
        alignright: ['Align right', 'JustifyRight'],
        alignjustify: ['Justify', 'JustifyFull'],
        alignnone: ['No alignment', 'JustifyNone']
    }, function (item, name) {
        editor.addButton(name, {
            active: false,
            tooltip: item[0],
            cmd: item[1],
            onPostRender: FormatUtils.postRenderFormatToggle(editor, name)
        });
    });
    alignMenuItems.forEach(function (item) {
        editor.addShortcut(item.shortcut, '', item.onclick);
    });
    editor.addShortcut('Meta+M', '', function () {
        editor.execCommand('Indent');
    });
    editor.addShortcut('Meta+Shift+M', '', function () {
        editor.execCommand('Outdent');
    });
};
export default {
    register: register
};
//# sourceMappingURL=Align.js.map
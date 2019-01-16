/**
 * Formats.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
import Tools from 'tinymce/core/api/util/Tools';
import * as FormatUtils from './FormatUtils';
var hideMenuObjects = function (editor, menu) {
    var count = menu.length;
    Tools.each(menu, function (item) {
        if (item.menu) {
            item.hidden = hideMenuObjects(editor, item.menu) === 0;
        }
        var formatName = item.format;
        if (formatName) {
            item.hidden = !editor.formatter.canApply(formatName);
        }
        if (item.hidden) {
            count--;
        }
    });
    return count;
};
var hideFormatMenuItems = function (editor, menu) {
    var count = menu.items().length;
    menu.items().each(function (item) {
        if (item.menu) {
            item.visible(hideFormatMenuItems(editor, item.menu) > 0);
        }
        if (!item.menu && item.settings.menu) {
            item.visible(hideMenuObjects(editor, item.settings.menu) > 0);
        }
        var formatName = item.settings.format;
        if (formatName) {
            item.visible(editor.formatter.canApply(formatName));
        }
        if (!item.visible()) {
            count--;
        }
    });
    return count;
};
var createFormatMenu = function (editor) {
    var count = 0;
    var newFormats = [];
    var defaultStyleFormats = [
        {
            title: 'Headings',
            items: [
                { title: 'Heading 1', format: 'h1' },
                { title: 'Heading 2', format: 'h2' },
                { title: 'Heading 3', format: 'h3' },
                { title: 'Heading 4', format: 'h4' },
                { title: 'Heading 5', format: 'h5' },
                { title: 'Heading 6', format: 'h6' }
            ]
        },
        {
            title: 'Inline',
            items: [
                { title: 'Bold', icon: 'bold', format: 'bold' },
                { title: 'Italic', icon: 'italic', format: 'italic' },
                { title: 'Underline', icon: 'underline', format: 'underline' },
                {
                    title: 'Strikethrough',
                    icon: 'strikethrough',
                    format: 'strikethrough'
                },
                { title: 'Superscript', icon: 'superscript', format: 'superscript' },
                { title: 'Subscript', icon: 'subscript', format: 'subscript' },
                { title: 'Code', icon: 'code', format: 'code' }
            ]
        },
        {
            title: 'Blocks',
            items: [
                { title: 'Paragraph', format: 'p' },
                { title: 'Blockquote', format: 'blockquote' },
                { title: 'Div', format: 'div' },
                { title: 'Pre', format: 'pre' }
            ]
        },
        {
            title: 'Alignment',
            items: [
                { title: 'Left', icon: 'alignleft', format: 'alignleft' },
                { title: 'Center', icon: 'aligncenter', format: 'aligncenter' },
                { title: 'Right', icon: 'alignright', format: 'alignright' },
                { title: 'Justify', icon: 'alignjustify', format: 'alignjustify' }
            ]
        }
    ];
    var createMenu = function (formats) {
        var menu = [];
        if (!formats) {
            return;
        }
        Tools.each(formats, function (format) {
            var menuItem = {
                text: format.title,
                icon: format.icon
            };
            if (format.items) {
                menuItem.menu = createMenu(format.items);
            }
            else {
                var formatName = format.format || 'custom' + count++;
                if (!format.format) {
                    format.name = formatName;
                    newFormats.push(format);
                }
                menuItem.format = formatName;
                menuItem.cmd = format.cmd;
            }
            menu.push(menuItem);
        });
        return menu;
    };
    var createStylesMenu = function () {
        var menu;
        if (editor.settings.style_formats_merge) {
            if (editor.settings.style_formats) {
                menu = createMenu(defaultStyleFormats.concat(editor.settings.style_formats));
            }
            else {
                menu = createMenu(defaultStyleFormats);
            }
        }
        else {
            menu = createMenu(editor.settings.style_formats || defaultStyleFormats);
        }
        return menu;
    };
    editor.on('init', function () {
        Tools.each(newFormats, function (format) {
            editor.formatter.register(format.name, format);
        });
    });
    return {
        type: 'menu',
        items: createStylesMenu(),
        onPostRender: function (e) {
            editor.fire('renderFormatsMenu', { control: e.control });
        },
        itemDefaults: {
            preview: true,
            textStyle: function () {
                if (this.settings.format) {
                    return editor.formatter.getCssText(this.settings.format);
                }
            },
            onPostRender: function () {
                var self = this;
                self.parent().on('show', function () {
                    var formatName, command;
                    formatName = self.settings.format;
                    if (formatName) {
                        self.disabled(!editor.formatter.canApply(formatName));
                        self.active(editor.formatter.match(formatName));
                    }
                    command = self.settings.cmd;
                    if (command) {
                        self.active(editor.queryCommandState(command));
                    }
                });
            },
            onclick: function () {
                if (this.settings.format) {
                    FormatUtils.toggleFormat(editor, this.settings.format)();
                }
                if (this.settings.cmd) {
                    editor.execCommand(this.settings.cmd);
                }
            }
        }
    };
};
var createStylesItem = function (editor) {
    var defaultStyleFormats = [
        { title: 'Bold', icon: 'bold', format: 'bold', shortcut: 'Meta+B' },
        { title: 'Italic', icon: 'italic', format: 'italic', shortcut: 'Meta+I' },
        {
            title: 'Underline',
            icon: 'underline',
            format: 'underline',
            shortcut: 'Meta+U'
        },
        {
            title: 'Strikethrough',
            icon: 'strikethrough',
            format: 'strikethrough',
            shortcut: 'Meta+T'
        },
        { title: 'Code', icon: 'code', format: 'code', shortcut: 'Meta+Shift+L' },
        {
            title: 'Superscript',
            icon: 'superscript',
            format: 'superscript',
            shortcut: 'Meta+Shift+Up'
        },
        {
            title: 'Subscript',
            icon: 'subscript',
            format: 'subscript',
            shortcut: 'Meta+Shift+Down'
        }
    ];
    return defaultStyleFormats.map(function (item) {
        if (item.icon === 'code') {
            return {
                text: item.title,
                icon: item.icon,
                shortcut: item.shortcut,
                onclick: function () {
                    editor.execCommand('InsertCode');
                }
            };
        }
        return {
            text: item.title,
            icon: item.icon,
            shortcut: item.shortcut,
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, item.format);
            }
        };
    });
};
var registerMenuItems = function (editor, formatMenu, stylesMenu) {
    editor.addMenuItem('formats', {
        text: 'Formats',
        menu: formatMenu
    });
    editor.addMenuItem('fontstyle', {
        text: 'font style',
        menu: stylesMenu
    });
};
var registerKeyboard = function (editor, Menu) {
    Menu.forEach(function (item) {
        editor.addShortcut(item.shortcut, '', item.onclick);
    });
};
var registerButtons = function (editor, formatMenu) {
    editor.addButton('styleselect', {
        type: 'menubutton',
        text: 'Formats',
        menu: formatMenu,
        onShowMenu: function () {
            if (editor.settings.style_formats_autohide) {
                hideFormatMenuItems(editor, this.menu);
            }
        }
    });
};
var register = function (editor) {
    var formatMenu = createFormatMenu(editor);
    var stylesMenu = createStylesItem(editor);
    registerMenuItems(editor, formatMenu, stylesMenu);
    registerButtons(editor, formatMenu);
    registerKeyboard(editor, stylesMenu);
};
export default {
    register: register
};
//# sourceMappingURL=Formats.js.map
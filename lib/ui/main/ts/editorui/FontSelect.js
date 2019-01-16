/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var getFirstFont = function (fontFamily) {
    return fontFamily ? fontFamily.split(',')[0] : '';
};
var findMatchingValue = function (items, fontFamily) {
    var font = fontFamily ? fontFamily.toLowerCase() : '';
    var value;
    Tools.each(items, function (item) {
        if (item.value.toLowerCase() === font) {
            value = item.value;
        }
    });
    Tools.each(items, function (item) {
        if (!value && getFirstFont(item.value).toLowerCase() === getFirstFont(font).toLowerCase()) {
            value = item.value;
        }
    });
    return value;
};
var createFontNameListBoxChangeHandler = function (editor, items) {
    return function () {
        var self = this;
        // We need to remove the initial value since since the display text will
        // not be updated if we set it to the same initial value on post render.
        self.state.set('value', null);
        editor.on('init nodeChange', function (e) {
            var fontFamily = editor.queryCommandValue('FontName');
            var match = findMatchingValue(items, fontFamily);
            self.value(match ? match : null);
            if (!match && fontFamily) {
                self.text(getFirstFont(fontFamily));
            }
        });
    };
};
var createFormats = function (formats) {
    formats = formats.replace(/;$/, '').split(';');
    var i = formats.length;
    while (i--) {
        formats[i] = formats[i].split('=');
    }
    return formats;
};
var getFontItems = function (editor) {
    var defaultFontsFormats = ('Andale Mono=andale mono,monospace;' +
        'Arial=arial,helvetica,sans-serif;' +
        'Arial Black=arial black,sans-serif;' +
        'Book Antiqua=book antiqua,palatino,serif;' +
        'Comic Sans MS=comic sans ms,sans-serif;' +
        'Courier New=courier new,courier,monospace;' +
        'Georgia=georgia,palatino,serif;' +
        'Helvetica=helvetica,arial,sans-serif;' +
        'Impact=impact,sans-serif;' +
        'Symbol=symbol;' +
        'Tahoma=tahoma,arial,helvetica,sans-serif;' +
        'Terminal=terminal,monaco,monospace;' +
        'Times New Roman=times new roman,times,serif;' +
        'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
        'Verdana=verdana,geneva,sans-serif;' +
        'Webdings=webdings;' +
        'Wingdings=wingdings,zapf dingbats');
    var fonts = createFormats(editor.settings.font_formats || defaultFontsFormats);
    return Tools.map(fonts, function (font) {
        return {
            text: { raw: font[0] },
            value: font[1],
            textStyle: font[1].indexOf('dings') === -1 ? 'font-family:' + font[1] : ''
        };
    });
};
var registerButtons = function (editor) {
    editor.addButton('fontselect', function () {
        var items = getFontItems(editor);
        return {
            type: 'listbox',
            text: 'Font Family',
            tooltip: 'Font Family',
            values: items,
            fixedWidth: true,
            onPostRender: createFontNameListBoxChangeHandler(editor, items),
            onselect: function (e) {
                if (e.control.settings.value) {
                    editor.execCommand('FontName', false, e.control.settings.value);
                }
            }
        };
    });
};
var register = function (editor) {
    registerButtons(editor);
};
export default {
    register: register
};
//# sourceMappingURL=FontSelect.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var stringRepeat = function (string, repeats) {
    var str = '';
    for (var index = 0; index < repeats; index++) {
        str += string;
    }
    return str;
};
var isVisualCharsEnabled = function (editor) {
    return editor.plugins.visualchars ? editor.plugins.visualchars.isEnabled() : false;
};
var insertNbsp = function (editor, times) {
    var nbsp = isVisualCharsEnabled(editor) ? '<span class="mce-nbsp">&nbsp;</span>' : '&nbsp;';
    editor.insertContent(stringRepeat(nbsp, times));
    editor.dom.setAttrib(editor.dom.select('span.mce-nbsp'), 'data-mce-bogus', '1');
};
export default {
    insertNbsp: insertNbsp
};
//# sourceMappingURL=Actions.js.map
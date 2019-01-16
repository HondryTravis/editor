/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var toggleFormat = function (editor, fmt) {
    return function () {
        editor.execCommand('mceToggleFormat', false, fmt);
    };
};
var addFormatChangedListener = function (editor, name, changed) {
    var handler = function (state) {
        changed(state, name);
    };
    if (editor.formatter) {
        editor.formatter.formatChanged(name, handler);
    }
    else {
        editor.on('init', function () {
            editor.formatter.formatChanged(name, handler);
        });
    }
};
var postRenderFormatToggle = function (editor, name) { return function (e) {
    addFormatChangedListener(editor, name, function (state) {
        e.control.active(state);
    });
}; };
export { toggleFormat, addFormatChangedListener, postRenderFormatToggle };
//# sourceMappingURL=FormatUtils.js.map
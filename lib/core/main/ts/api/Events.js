/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var firePreProcess = function (editor, args) { return editor.fire('PreProcess', args); };
var firePostProcess = function (editor, args) { return editor.fire('PostProcess', args); };
var fireRemove = function (editor) { return editor.fire('remove'); };
var fireSwitchMode = function (editor, mode) { return editor.fire('SwitchMode', { mode: mode }); };
var fireObjectResizeStart = function (editor, target, width, height) {
    editor.fire('ObjectResizeStart', { target: target, width: width, height: height });
};
var fireObjectResized = function (editor, target, width, height) {
    editor.fire('ObjectResized', { target: target, width: width, height: height });
};
export default {
    firePreProcess: firePreProcess,
    firePostProcess: firePostProcess,
    fireRemove: fireRemove,
    fireSwitchMode: fireSwitchMode,
    fireObjectResizeStart: fireObjectResizeStart,
    fireObjectResized: fireObjectResized
};
//# sourceMappingURL=Events.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var fireNewRow = function (editor, row) { return editor.fire('newrow', { node: row }); };
var fireNewCell = function (editor, cell) { return editor.fire('newcell', { node: cell }); };
var fireObjectResizeStart = function (editor, target, width, height) {
    editor.fire('ObjectResizeStart', { target: target, width: width, height: height });
};
var fireObjectResized = function (editor, target, width, height) {
    editor.fire('ObjectResized', { target: target, width: width, height: height });
};
export { fireNewRow, fireNewCell, fireObjectResizeStart, fireObjectResized };
//# sourceMappingURL=Events.js.map
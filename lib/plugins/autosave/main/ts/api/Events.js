/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var fireRestoreDraft = function (editor) {
    return editor.fire('RestoreDraft');
};
var fireStoreDraft = function (editor) {
    return editor.fire('StoreDraft');
};
var fireRemoveDraft = function (editor) {
    return editor.fire('RemoveDraft');
};
export { fireRestoreDraft, fireStoreDraft, fireRemoveDraft };
//# sourceMappingURL=Events.js.map
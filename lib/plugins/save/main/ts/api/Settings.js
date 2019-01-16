/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var enableWhenDirty = function (editor) {
    return editor.getParam('save_enablewhendirty', true);
};
var hasOnSaveCallback = function (editor) {
    return !!editor.getParam('save_onsavecallback');
};
var hasOnCancelCallback = function (editor) {
    return !!editor.getParam('save_oncancelcallback');
};
export default {
    enableWhenDirty: enableWhenDirty,
    hasOnSaveCallback: hasOnSaveCallback,
    hasOnCancelCallback: hasOnCancelCallback
};
//# sourceMappingURL=Settings.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var fireSkinLoaded = function (editor) {
    editor.fire('SkinLoaded');
};
var fireBeforeRenderUI = function (editor) {
    return editor.fire('BeforeRenderUI');
};
export default {
    fireSkinLoaded: fireSkinLoaded,
    fireBeforeRenderUI: fireBeforeRenderUI
};
//# sourceMappingURL=Events.js.map
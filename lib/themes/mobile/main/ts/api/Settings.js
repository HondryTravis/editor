/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
};
var readOnlyOnInit = function (editor) {
    // Intentional short circuit, TODO: implement editor.settings.mobile
    return false;
};
export { isSkinDisabled, readOnlyOnInit };
//# sourceMappingURL=Settings.js.map
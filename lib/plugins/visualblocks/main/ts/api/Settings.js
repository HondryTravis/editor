/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var isEnabledByDefault = function (editor) {
    return editor.getParam('visualblocks_default_state', false);
};
var getContentCss = function (editor) {
    return editor.settings.visualblocks_content_css;
};
export default {
    isEnabledByDefault: isEnabledByDefault,
    getContentCss: getContentCss
};
//# sourceMappingURL=Settings.js.map
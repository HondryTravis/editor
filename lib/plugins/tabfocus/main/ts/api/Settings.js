/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getTabFocusElements = function (editor) {
    return editor.getParam('tabfocus_elements', ':prev,:next');
};
var getTabFocus = function (editor) {
    return editor.getParam('tab_focus', getTabFocusElements(editor));
};
export default {
    getTabFocus: getTabFocus
};
//# sourceMappingURL=Settings.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * This module handle sidebar instances for the editor.
 *
 * @class tinymce.ui.Sidebar
 * @private
 */
var add = function (editor, name, settings) {
    var sidebars = editor.sidebars ? editor.sidebars : [];
    sidebars.push({ name: name, settings: settings });
    editor.sidebars = sidebars;
};
export default {
    add: add
};
//# sourceMappingURL=Sidebar.js.map
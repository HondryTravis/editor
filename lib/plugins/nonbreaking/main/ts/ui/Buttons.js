/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var register = function (editor) {
    editor.addButton('nonbreaking', {
        title: 'Nonbreaking space',
        cmd: 'mceNonBreaking'
    });
    editor.addMenuItem('nonbreaking', {
        icon: 'nonbreaking',
        text: 'Nonbreaking space',
        cmd: 'mceNonBreaking',
        context: 'insert'
    });
};
export default {
    register: register
};
//# sourceMappingURL=Buttons.js.map
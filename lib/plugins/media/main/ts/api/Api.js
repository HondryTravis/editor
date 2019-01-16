/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Dialog from '../ui/Dialog';
var get = function (editor) {
    var showDialog = function () {
        Dialog.showDialog(editor);
    };
    return {
        showDialog: showDialog
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
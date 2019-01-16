/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Delete from '../core/Delete';
var get = function (editor) {
    return {
        backspaceDelete: function (isForward) {
            Delete.backspaceDelete(editor, isForward);
        }
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var get = function (visibleState) {
    var isContextMenuVisible = function () {
        return visibleState.get();
    };
    return {
        isContextMenuVisible: isContextMenuVisible
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
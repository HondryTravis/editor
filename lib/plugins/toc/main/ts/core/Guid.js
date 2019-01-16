/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var create = function (prefix) {
    var counter = 0;
    return function () {
        var guid = new Date().getTime().toString(32);
        return prefix + guid + (counter++).toString(32);
    };
};
export default {
    create: create
};
//# sourceMappingURL=Guid.js.map
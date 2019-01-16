/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Generates unique ids.
 *
 * @class tinymce.util.Uuid
 * @private
 */
var count = 0;
var seed = function () {
    var rnd = function () {
        return Math.round(Math.random() * 0xFFFFFFFF).toString(36);
    };
    var now = new Date().getTime();
    return 's' + now.toString(36) + rnd() + rnd() + rnd();
};
var uuid = function (prefix) {
    return prefix + (count++) + seed();
};
export default {
    uuid: uuid
};
//# sourceMappingURL=Uuid.js.map
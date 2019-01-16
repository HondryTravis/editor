/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var slice = [].slice;
var or = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var args = slice.call(arguments);
    return function (x) {
        for (var i = 0; i < args.length; i++) {
            if (args[i](x)) {
                return true;
            }
        }
        return false;
    };
};
var and = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var args = slice.call(arguments);
    return function (x) {
        for (var i = 0; i < args.length; i++) {
            if (!args[i](x)) {
                return false;
            }
        }
        return true;
    };
};
export default {
    and: and,
    or: or
};
//# sourceMappingURL=Predicate.js.map
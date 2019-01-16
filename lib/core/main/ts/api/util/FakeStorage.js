/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
// Simple stub of localstorage for IE11 with strict security settings #TINY-1782
export var create = function () { return (function () {
    var data = {};
    var keys = [];
    var storage = {
        getItem: function (key) {
            var item = data[key];
            return item ? item : null;
        },
        setItem: function (key, value) {
            keys.push(key);
            data[key] = String(value);
        },
        key: function (index) {
            return keys[index];
        },
        removeItem: function (key) {
            keys = keys.filter(function (k) { return k === key; });
            delete data[key];
        },
        clear: function () {
            keys = [];
            data = {};
        },
        length: 0
    };
    Object.defineProperty(storage, 'length', {
        get: function () { return keys.length; },
        configurable: false,
        enumerable: false
    });
    return storage;
})(); };
//# sourceMappingURL=FakeStorage.js.map
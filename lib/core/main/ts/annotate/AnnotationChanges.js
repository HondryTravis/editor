/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Throttler, Option, Arr, Cell, Obj } from '@ephox/katamari';
import { identify } from './Identification';
var setup = function (editor, registry) {
    var changeCallbacks = Cell({});
    var initData = function () { return ({
        listeners: [],
        previous: Cell(Option.none())
    }); };
    var withCallbacks = function (name, f) {
        updateCallbacks(name, function (data) {
            f(data);
            return data;
        });
    };
    var updateCallbacks = function (name, f) {
        var callbackMap = changeCallbacks.get();
        var data = callbackMap.hasOwnProperty(name) ? callbackMap[name] : initData();
        var outputData = f(data);
        callbackMap[name] = outputData;
        changeCallbacks.set(callbackMap);
    };
    var fireCallbacks = function (name, uid, elements) {
        withCallbacks(name, function (data) {
            Arr.each(data.listeners, function (f) { return f(true, name, {
                uid: uid,
                nodes: Arr.map(elements, function (elem) { return elem.dom(); })
            }); });
        });
    };
    var fireNoAnnotation = function (name) {
        withCallbacks(name, function (data) {
            Arr.each(data.listeners, function (f) { return f(false, name); });
        });
    };
    // NOTE: Runs in alphabetical order.
    var onNodeChange = Throttler.last(function () {
        var callbackMap = changeCallbacks.get();
        var annotations = Arr.sort(Obj.keys(callbackMap));
        Arr.each(annotations, function (name) {
            updateCallbacks(name, function (data) {
                var prev = data.previous.get();
                identify(editor, Option.some(name)).fold(function () {
                    if (prev.isSome()) {
                        // Changed from something to nothing.
                        fireNoAnnotation(name);
                        data.previous.set(Option.none());
                    }
                }, function (_a) {
                    var uid = _a.uid, name = _a.name, elements = _a.elements;
                    // Changed from a different annotation (or nothing)
                    if (!prev.is(uid)) {
                        fireCallbacks(name, uid, elements);
                        data.previous.set(Option.some(uid));
                    }
                });
                return {
                    previous: data.previous,
                    listeners: data.listeners
                };
            });
        });
    }, 30);
    editor.on('remove', function () {
        onNodeChange.cancel();
    });
    editor.on('nodeChange', function () {
        onNodeChange.throttle();
    });
    var addListener = function (name, f) {
        updateCallbacks(name, function (data) {
            return {
                previous: data.previous,
                listeners: data.listeners.concat([f])
            };
        });
    };
    return {
        addListener: addListener
    };
};
export { setup };
//# sourceMappingURL=AnnotationChanges.js.map
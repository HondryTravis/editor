/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { TapEvent } from '@ephox/alloy';
import { DomEvent } from '@ephox/sugar';
// TODO: TapEvent needs to be exposed in alloy's API somehow
var monitor = function (editorApi) {
    var tapEvent = TapEvent.monitor({
        triggerEvent: function (type, evt) {
            editorApi.onTapContent(evt);
        }
    });
    // convenience methods
    var onTouchend = function () {
        return DomEvent.bind(editorApi.body(), 'touchend', function (evt) {
            tapEvent.fireIfReady(evt, 'touchend');
        });
    };
    var onTouchmove = function () {
        return DomEvent.bind(editorApi.body(), 'touchmove', function (evt) {
            tapEvent.fireIfReady(evt, 'touchmove');
        });
    };
    var fireTouchstart = function (evt) {
        tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
        fireTouchstart: fireTouchstart,
        onTouchend: onTouchend,
        onTouchmove: onTouchmove
    };
};
export default {
    monitor: monitor
};
//# sourceMappingURL=TappingEvent.js.map
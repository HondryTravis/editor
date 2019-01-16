/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var fromClientRect = function (clientRect) {
    return {
        x: clientRect.left,
        y: clientRect.top,
        w: clientRect.width,
        h: clientRect.height
    };
};
var toClientRect = function (geomRect) {
    return {
        left: geomRect.x,
        top: geomRect.y,
        width: geomRect.w,
        height: geomRect.h,
        right: geomRect.x + geomRect.w,
        bottom: geomRect.y + geomRect.h
    };
};
export default {
    fromClientRect: fromClientRect,
    toClientRect: toClientRect
};
//# sourceMappingURL=Convert.js.map
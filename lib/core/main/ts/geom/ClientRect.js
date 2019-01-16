/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var round = Math.round;
var clone = function (rect) {
    if (!rect) {
        return { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
    }
    return {
        left: round(rect.left),
        top: round(rect.top),
        bottom: round(rect.bottom),
        right: round(rect.right),
        width: round(rect.width),
        height: round(rect.height)
    };
};
var collapse = function (rect, toStart) {
    rect = clone(rect);
    if (toStart) {
        rect.right = rect.left;
    }
    else {
        rect.left = rect.left + rect.width;
        rect.right = rect.left;
    }
    rect.width = 0;
    return rect;
};
var isEqual = function (rect1, rect2) {
    return (rect1.left === rect2.left &&
        rect1.top === rect2.top &&
        rect1.bottom === rect2.bottom &&
        rect1.right === rect2.right);
};
var isValidOverflow = function (overflowY, rect1, rect2) {
    return overflowY >= 0 && overflowY <= Math.min(rect1.height, rect2.height) / 2;
};
var isAbove = function (rect1, rect2) {
    if ((rect1.bottom - rect1.height / 2) < rect2.top) {
        return true;
    }
    if (rect1.top > rect2.bottom) {
        return false;
    }
    return isValidOverflow(rect2.top - rect1.bottom, rect1, rect2);
};
var isBelow = function (rect1, rect2) {
    if (rect1.top > rect2.bottom) {
        return true;
    }
    if (rect1.bottom < rect2.top) {
        return false;
    }
    return isValidOverflow(rect2.bottom - rect1.top, rect1, rect2);
};
var isLeft = function (rect1, rect2) { return rect1.left < rect2.left; };
var isRight = function (rect1, rect2) { return rect1.right > rect2.right; };
var compare = function (rect1, rect2) {
    if (isAbove(rect1, rect2)) {
        return -1;
    }
    if (isBelow(rect1, rect2)) {
        return 1;
    }
    if (isLeft(rect1, rect2)) {
        return -1;
    }
    if (isRight(rect1, rect2)) {
        return 1;
    }
    return 0;
};
var containsXY = function (rect, clientX, clientY) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
};
var overflowX = function (outer, inner) {
    if (inner.left > outer.left && inner.right < outer.right) {
        return 0;
    }
    else {
        return inner.left < outer.left ? inner.left - outer.left : inner.right - outer.right;
    }
};
var overflowY = function (outer, inner) {
    if (inner.top > outer.top && inner.bottom < outer.bottom) {
        return 0;
    }
    else {
        return inner.top < outer.top ? inner.top - outer.top : inner.bottom - outer.bottom;
    }
};
var getOverflow = function (outer, inner) {
    return { x: overflowX(outer, inner), y: overflowY(outer, inner) };
};
export { clone, collapse, isEqual, isAbove, isBelow, isLeft, isRight, compare, containsXY, getOverflow };
//# sourceMappingURL=ClientRect.js.map
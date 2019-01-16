/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import NodeType from './NodeType';
import { getOverflow } from 'tinymce/core/geom/ClientRect';
import { CaretPosition } from 'tinymce/core/caret/CaretPosition';
import { Arr } from '@ephox/katamari';
var getPos = function (elm) {
    var x = 0, y = 0;
    var offsetParent = elm;
    while (offsetParent && offsetParent.nodeType) {
        x += offsetParent.offsetLeft || 0;
        y += offsetParent.offsetTop || 0;
        offsetParent = offsetParent.offsetParent;
    }
    return { x: x, y: y };
};
var fireScrollIntoViewEvent = function (editor, elm, alignToTop) {
    var scrollEvent = { elm: elm, alignToTop: alignToTop };
    editor.fire('scrollIntoView', scrollEvent);
    return scrollEvent.isDefaultPrevented();
};
var scrollElementIntoView = function (editor, elm, alignToTop) {
    var y, viewPort;
    var dom = editor.dom;
    var root = dom.getRoot();
    var viewPortY, viewPortH, offsetY = 0;
    if (fireScrollIntoViewEvent(editor, elm, alignToTop)) {
        return;
    }
    if (!NodeType.isElement(elm)) {
        return;
    }
    if (alignToTop === false) {
        offsetY = elm.offsetHeight;
    }
    if (root.nodeName !== 'BODY') {
        var scrollContainer = editor.selection.getScrollContainer();
        if (scrollContainer) {
            y = getPos(elm).y - getPos(scrollContainer).y + offsetY;
            viewPortH = scrollContainer.clientHeight;
            viewPortY = scrollContainer.scrollTop;
            if (y < viewPortY || y + 25 > viewPortY + viewPortH) {
                scrollContainer.scrollTop = y < viewPortY ? y : y - viewPortH + 25;
            }
            return;
        }
    }
    viewPort = dom.getViewPort(editor.getWin());
    y = dom.getPos(elm).y + offsetY;
    viewPortY = viewPort.y;
    viewPortH = viewPort.h;
    if (y < viewPort.y || y + 25 > viewPortY + viewPortH) {
        editor.getWin().scrollTo(0, y < viewPortY ? y : y - viewPortH + 25);
    }
};
var getViewPortRect = function (editor) {
    if (editor.inline) {
        return editor.getBody().getBoundingClientRect();
    }
    else {
        var win = editor.getWin();
        return {
            left: 0,
            right: win.innerWidth,
            top: 0,
            bottom: win.innerHeight,
            width: win.innerWidth,
            height: win.innerHeight
        };
    }
};
var scrollBy = function (editor, dx, dy) {
    if (editor.inline) {
        editor.getBody().scrollLeft += dx;
        editor.getBody().scrollTop += dy;
    }
    else {
        editor.getWin().scrollBy(dx, dy);
    }
};
var scrollRangeIntoView = function (editor, rng) {
    Arr.head(CaretPosition.fromRangeStart(rng).getClientRects()).each(function (rngRect) {
        var bodyRect = getViewPortRect(editor);
        var overflow = getOverflow(bodyRect, rngRect);
        var margin = 4;
        var dx = overflow.x > 0 ? overflow.x + margin : overflow.x - margin;
        var dy = overflow.y > 0 ? overflow.y + margin : overflow.y - margin;
        scrollBy(editor, overflow.x !== 0 ? dx : 0, overflow.y !== 0 ? dy : 0);
    });
};
export default {
    scrollElementIntoView: scrollElementIntoView,
    scrollRangeIntoView: scrollRangeIntoView
};
//# sourceMappingURL=ScrollIntoView.js.map
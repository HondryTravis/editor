/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import * as CaretContainer from './CaretContainer';
import CaretContainerRemove from './CaretContainerRemove';
import DomQuery from '../api/dom/DomQuery';
import NodeType from '../dom/NodeType';
import * as GeomClientRect from '../geom/ClientRect';
import Delay from '../api/util/Delay';
import { Cell, Option } from '@ephox/katamari';
import { PlatformDetection } from '@ephox/sand';
var browser = PlatformDetection.detect().browser;
var isContentEditableFalse = NodeType.isContentEditableFalse;
var isTableCell = function (node) { return NodeType.isElement(node) && /^(TD|TH)$/i.test(node.tagName); };
var getAbsoluteClientRect = function (root, element, before) {
    var clientRect = GeomClientRect.collapse(element.getBoundingClientRect(), before);
    var docElm, scrollX, scrollY, margin, rootRect;
    if (root.tagName === 'BODY') {
        docElm = root.ownerDocument.documentElement;
        scrollX = root.scrollLeft || docElm.scrollLeft;
        scrollY = root.scrollTop || docElm.scrollTop;
    }
    else {
        rootRect = root.getBoundingClientRect();
        scrollX = root.scrollLeft - rootRect.left;
        scrollY = root.scrollTop - rootRect.top;
    }
    clientRect.left += scrollX;
    clientRect.right += scrollX;
    clientRect.top += scrollY;
    clientRect.bottom += scrollY;
    clientRect.width = 1;
    margin = element.offsetWidth - element.clientWidth;
    if (margin > 0) {
        if (before) {
            margin *= -1;
        }
        clientRect.left += margin;
        clientRect.right += margin;
    }
    return clientRect;
};
var trimInlineCaretContainers = function (root) {
    var contentEditableFalseNodes, node, sibling, i, data;
    contentEditableFalseNodes = DomQuery('*[contentEditable=false]', root);
    for (i = 0; i < contentEditableFalseNodes.length; i++) {
        node = contentEditableFalseNodes[i];
        sibling = node.previousSibling;
        if (CaretContainer.endsWithCaretContainer(sibling)) {
            data = sibling.data;
            if (data.length === 1) {
                sibling.parentNode.removeChild(sibling);
            }
            else {
                sibling.deleteData(data.length - 1, 1);
            }
        }
        sibling = node.nextSibling;
        if (CaretContainer.startsWithCaretContainer(sibling)) {
            data = sibling.data;
            if (data.length === 1) {
                sibling.parentNode.removeChild(sibling);
            }
            else {
                sibling.deleteData(0, 1);
            }
        }
    }
};
export var FakeCaret = function (root, isBlock, hasFocus) {
    var lastVisualCaret = Cell(Option.none());
    var cursorInterval, caretContainerNode;
    var show = function (before, element) {
        var clientRect, rng;
        hide();
        if (isTableCell(element)) {
            return null;
        }
        if (isBlock(element)) {
            caretContainerNode = CaretContainer.insertBlock('p', element, before);
            clientRect = getAbsoluteClientRect(root, element, before);
            DomQuery(caretContainerNode).css('top', clientRect.top);
            var caret = DomQuery('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(clientRect).appendTo(root)[0];
            lastVisualCaret.set(Option.some({ caret: caret, element: element, before: before }));
            lastVisualCaret.get().each(function (caretState) {
                if (before) {
                    DomQuery(caretState.caret).addClass('mce-visual-caret-before');
                }
            });
            startBlink();
            rng = element.ownerDocument.createRange();
            rng.setStart(caretContainerNode, 0);
            rng.setEnd(caretContainerNode, 0);
        }
        else {
            caretContainerNode = CaretContainer.insertInline(element, before);
            rng = element.ownerDocument.createRange();
            if (isContentEditableFalse(caretContainerNode.nextSibling)) {
                rng.setStart(caretContainerNode, 0);
                rng.setEnd(caretContainerNode, 0);
            }
            else {
                rng.setStart(caretContainerNode, 1);
                rng.setEnd(caretContainerNode, 1);
            }
            return rng;
        }
        return rng;
    };
    var hide = function () {
        trimInlineCaretContainers(root);
        if (caretContainerNode) {
            CaretContainerRemove.remove(caretContainerNode);
            caretContainerNode = null;
        }
        lastVisualCaret.get().each(function (caretState) {
            DomQuery(caretState.caret).remove();
            lastVisualCaret.set(Option.none());
        });
        clearInterval(cursorInterval);
    };
    var startBlink = function () {
        cursorInterval = Delay.setInterval(function () {
            if (hasFocus()) {
                DomQuery('div.mce-visual-caret', root).toggleClass('mce-visual-caret-hidden');
            }
            else {
                DomQuery('div.mce-visual-caret', root).addClass('mce-visual-caret-hidden');
            }
        }, 500);
    };
    var reposition = function () {
        lastVisualCaret.get().each(function (caretState) {
            var clientRect = getAbsoluteClientRect(root, caretState.element, caretState.before);
            DomQuery(caretState.caret).css(clientRect);
        });
    };
    var destroy = function () { return Delay.clearInterval(cursorInterval); };
    var getCss = function () {
        return ('.mce-visual-caret {' +
            'position: absolute;' +
            'background-color: black;' +
            'background-color: currentcolor;' +
            // 'background-color: red;' +
            '}' +
            '.mce-visual-caret-hidden {' +
            'display: none;' +
            '}' +
            '*[data-mce-caret] {' +
            'position: absolute;' +
            'left: -1000px;' +
            'right: auto;' +
            'top: 0;' +
            'margin: 0;' +
            'padding: 0;' +
            '}');
    };
    return {
        show: show,
        hide: hide,
        getCss: getCss,
        reposition: reposition,
        destroy: destroy
    };
};
export var isFakeCaretTableBrowser = function () { return browser.isIE() || browser.isEdge() || browser.isFirefox(); };
export var isFakeCaretTarget = function (node) { return isContentEditableFalse(node) || (NodeType.isTable(node) && isFakeCaretTableBrowser()); };
//# sourceMappingURL=FakeCaret.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from '../caret/CaretPosition';
import { Element, PredicateFind, Node, Css } from '@ephox/sugar';
import { Strings, Option, Arr } from '@ephox/katamari';
import NodeType from '../dom/NodeType';
import Parents from '../dom/Parents';
import * as ElementType from '../dom/ElementType';
import { isBeforeSpace, isAfterSpace, getElementFromPosition } from '../caret/CaretUtils';
import CaretFinder from '../caret/CaretFinder';
import { isAtStartOfBlock, isAtEndOfBlock } from '../caret/BlockBoundary';
import { isNbsp, isContent } from '../text/CharType';
import { isAfterBr, isBeforeBr } from 'tinymce/core/caret/CaretBr';
var nbsp = '\u00a0';
var isInMiddleOfText = function (pos) { return CaretPosition.isTextPosition(pos) && !pos.isAtStart() && !pos.isAtEnd(); };
var getClosestBlock = function (root, pos) {
    var parentBlocks = Arr.filter(Parents.parentsAndSelf(Element.fromDom(pos.container()), root), ElementType.isBlock);
    return Arr.head(parentBlocks).getOr(root);
};
var hasSpaceBefore = function (root, pos) {
    if (isInMiddleOfText(pos)) {
        return isAfterSpace(pos);
    }
    else {
        return isAfterSpace(pos) || CaretFinder.prevPosition(getClosestBlock(root, pos).dom(), pos).exists(isAfterSpace);
    }
};
var hasSpaceAfter = function (root, pos) {
    if (isInMiddleOfText(pos)) {
        return isBeforeSpace(pos);
    }
    else {
        return isBeforeSpace(pos) || CaretFinder.nextPosition(getClosestBlock(root, pos).dom(), pos).exists(isBeforeSpace);
    }
};
var isPreValue = function (value) { return Arr.contains(['pre', 'pre-line', 'pre-wrap'], value); };
var isInPre = function (pos) {
    return getElementFromPosition(pos)
        .bind(function (elm) { return PredicateFind.closest(elm, Node.isElement); })
        .exists(function (elm) { return isPreValue(Css.get(elm, 'white-space')); });
};
var isAtBeginningOfBody = function (root, pos) { return CaretFinder.prevPosition(root.dom(), pos).isNone(); };
var isAtEndOfBody = function (root, pos) { return CaretFinder.nextPosition(root.dom(), pos).isNone(); };
var isAtLineBoundary = function (root, pos) {
    return (isAtBeginningOfBody(root, pos) ||
        isAtEndOfBody(root, pos) ||
        isAtStartOfBlock(root, pos) ||
        isAtEndOfBlock(root, pos) ||
        isAfterBr(root, pos) ||
        isBeforeBr(root, pos));
};
var needsToHaveNbsp = function (root, pos) {
    if (isInPre(pos)) {
        return false;
    }
    else {
        return isAtLineBoundary(root, pos) || hasSpaceBefore(root, pos) || hasSpaceAfter(root, pos);
    }
};
var needsToBeNbspLeft = function (root, pos) {
    if (isInPre(pos)) {
        return false;
    }
    else {
        return isAtStartOfBlock(root, pos) || isAfterBr(root, pos) || hasSpaceBefore(root, pos);
    }
};
var needsToBeNbspRight = function (root, pos) {
    if (isInPre(pos)) {
        return false;
    }
    else {
        return isAtEndOfBlock(root, pos) || isBeforeBr(root, pos) || hasSpaceAfter(root, pos);
    }
};
var isNbspAt = function (text, offset) {
    return isNbsp(text.charAt(offset));
};
var hasNbsp = function (pos) {
    var container = pos.container();
    return NodeType.isText(container) && Strings.contains(container.data, nbsp);
};
var normalizeNbspAtStart = function (root, node, text) {
    var firstPos = CaretPosition(node, 0);
    if (isNbspAt(text, 0) && !needsToBeNbspLeft(root, firstPos)) {
        return ' ' + text.slice(1);
    }
    else {
        return text;
    }
};
var normalizeNbspMiddle = function (text) {
    return Arr.map(text.split(''), function (chr, i, chars) {
        if (isNbsp(chr) && i > 0 && i < chars.length - 1 && isContent(chars[i - 1]) && isContent(chars[i + 1])) {
            return ' ';
        }
        else {
            return chr;
        }
    }).join('');
};
var normalizeNbspAtEnd = function (root, node, text) {
    var lastPos = CaretPosition(node, text.length);
    if (isNbspAt(text, text.length - 1) && !needsToBeNbspRight(root, lastPos)) {
        return text.slice(0, -1) + ' ';
    }
    else {
        return text;
    }
};
var normalizeNbsps = function (root, pos) {
    return Option.some(pos).filter(hasNbsp).bind(function (pos) {
        var container = pos.container();
        var text = container.nodeValue;
        var newText = normalizeNbspAtStart(root, container, normalizeNbspMiddle(normalizeNbspAtEnd(root, container, text)));
        if (text !== newText) {
            pos.container().nodeValue = newText;
            return Option.some(pos);
        }
        else {
            return Option.none();
        }
    });
};
var normalizeNbspsInEditor = function (editor) {
    var root = Element.fromDom(editor.getBody());
    if (editor.selection.isCollapsed()) {
        normalizeNbsps(root, CaretPosition.fromRangeStart(editor.selection.getRng())).each(function (pos) {
            editor.selection.setRng(pos.toRange());
        });
    }
};
export { needsToHaveNbsp, normalizeNbspMiddle, normalizeNbspsInEditor };
//# sourceMappingURL=Nbsps.js.map
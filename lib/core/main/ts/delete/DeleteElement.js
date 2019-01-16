/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun, Obj, Option, Options } from '@ephox/katamari';
import { Insert, Remove, Element, Node as SugarNode, PredicateFind, Traverse } from '@ephox/sugar';
import * as CaretCandidate from '../caret/CaretCandidate';
import CaretFinder from '../caret/CaretFinder';
import CaretPosition from '../caret/CaretPosition';
import * as MergeText from './MergeText';
import Empty from '../dom/Empty';
import NodeType from '../dom/NodeType';
var needsReposition = function (pos, elm) {
    var container = pos.container();
    var offset = pos.offset();
    return CaretPosition.isTextPosition(pos) === false && container === elm.parentNode && offset > CaretPosition.before(elm).offset();
};
var reposition = function (elm, pos) {
    return needsReposition(pos, elm) ? CaretPosition(pos.container(), pos.offset() - 1) : pos;
};
var beforeOrStartOf = function (node) {
    return NodeType.isText(node) ? CaretPosition(node, 0) : CaretPosition.before(node);
};
var afterOrEndOf = function (node) {
    return NodeType.isText(node) ? CaretPosition(node, node.data.length) : CaretPosition.after(node);
};
var getPreviousSiblingCaretPosition = function (elm) {
    if (CaretCandidate.isCaretCandidate(elm.previousSibling)) {
        return Option.some(afterOrEndOf(elm.previousSibling));
    }
    else {
        return elm.previousSibling ? CaretFinder.lastPositionIn(elm.previousSibling) : Option.none();
    }
};
var getNextSiblingCaretPosition = function (elm) {
    if (CaretCandidate.isCaretCandidate(elm.nextSibling)) {
        return Option.some(beforeOrStartOf(elm.nextSibling));
    }
    else {
        return elm.nextSibling ? CaretFinder.firstPositionIn(elm.nextSibling) : Option.none();
    }
};
var findCaretPositionBackwardsFromElm = function (rootElement, elm) {
    var startPosition = CaretPosition.before(elm.previousSibling ? elm.previousSibling : elm.parentNode);
    return CaretFinder.prevPosition(rootElement, startPosition).fold(function () {
        return CaretFinder.nextPosition(rootElement, CaretPosition.after(elm));
    }, Option.some);
};
var findCaretPositionForwardsFromElm = function (rootElement, elm) {
    return CaretFinder.nextPosition(rootElement, CaretPosition.after(elm)).fold(function () {
        return CaretFinder.prevPosition(rootElement, CaretPosition.before(elm));
    }, Option.some);
};
var findCaretPositionBackwards = function (rootElement, elm) {
    return getPreviousSiblingCaretPosition(elm).orThunk(function () {
        return getNextSiblingCaretPosition(elm);
    }).orThunk(function () {
        return findCaretPositionBackwardsFromElm(rootElement, elm);
    });
};
var findCaretPositionForward = function (rootElement, elm) {
    return getNextSiblingCaretPosition(elm).orThunk(function () {
        return getPreviousSiblingCaretPosition(elm);
    }).orThunk(function () {
        return findCaretPositionForwardsFromElm(rootElement, elm);
    });
};
var findCaretPosition = function (forward, rootElement, elm) {
    return forward ? findCaretPositionForward(rootElement, elm) : findCaretPositionBackwards(rootElement, elm);
};
var findCaretPosOutsideElmAfterDelete = function (forward, rootElement, elm) {
    return findCaretPosition(forward, rootElement, elm).map(Fun.curry(reposition, elm));
};
var setSelection = function (editor, forward, pos) {
    pos.fold(function () {
        editor.focus();
    }, function (pos) {
        editor.selection.setRng(pos.toRange(), forward);
    });
};
var eqRawNode = function (rawNode) {
    return function (elm) {
        return elm.dom() === rawNode;
    };
};
var isBlock = function (editor, elm) {
    return elm && editor.schema.getBlockElements().hasOwnProperty(SugarNode.name(elm));
};
var paddEmptyBlock = function (elm) {
    if (Empty.isEmpty(elm)) {
        var br = Element.fromHtml('<br data-mce-bogus="1">');
        Remove.empty(elm);
        Insert.append(elm, br);
        return Option.some(CaretPosition.before(br.dom()));
    }
    else {
        return Option.none();
    }
};
var deleteNormalized = function (elm, afterDeletePosOpt, normalizeWhitespace) {
    var prevTextOpt = Traverse.prevSibling(elm).filter(function (e) { return NodeType.isText(e.dom()); });
    var nextTextOpt = Traverse.nextSibling(elm).filter(function (e) { return NodeType.isText(e.dom()); });
    // Delete the element
    Remove.remove(elm);
    // Merge and normalize any prev/next text nodes, so that they are merged and don't lose meaningful whitespace
    // eg. <p>a <span></span> b</p> -> <p>a &nsbp;b</p> or <p><span></span> a</p> -> <p>&nbsp;a</a>
    return Options.liftN([prevTextOpt, nextTextOpt, afterDeletePosOpt], function (prev, next, pos) {
        var prevNode = prev.dom(), nextNode = next.dom();
        var offset = prevNode.data.length;
        MergeText.mergeTextNodes(prevNode, nextNode, normalizeWhitespace);
        // Update the cursor position if required
        return pos.container() === nextNode ? CaretPosition(prevNode, offset) : pos;
    }).orThunk(function () {
        if (normalizeWhitespace) {
            prevTextOpt.each(function (elm) { return MergeText.normalizeWhitespaceBefore(elm.dom(), elm.dom().length); });
            nextTextOpt.each(function (elm) { return MergeText.normalizeWhitespaceAfter(elm.dom(), 0); });
        }
        return afterDeletePosOpt;
    });
};
var isInlineElement = function (editor, element) {
    return Obj.has(editor.schema.getTextInlineElements(), SugarNode.name(element));
};
var deleteElement = function (editor, forward, elm, moveCaret) {
    if (moveCaret === void 0) { moveCaret = true; }
    var afterDeletePos = findCaretPosOutsideElmAfterDelete(forward, editor.getBody(), elm.dom());
    var parentBlock = PredicateFind.ancestor(elm, Fun.curry(isBlock, editor), eqRawNode(editor.getBody()));
    var normalizedAfterDeletePos = deleteNormalized(elm, afterDeletePos, isInlineElement(editor, elm));
    if (editor.dom.isEmpty(editor.getBody())) {
        editor.setContent('');
        editor.selection.setCursorLocation();
    }
    else {
        parentBlock.bind(paddEmptyBlock).fold(function () {
            if (moveCaret) {
                setSelection(editor, forward, normalizedAfterDeletePos);
            }
        }, function (paddPos) {
            if (moveCaret) {
                setSelection(editor, forward, Option.some(paddPos));
            }
        });
    }
};
export default {
    deleteElement: deleteElement
};
//# sourceMappingURL=DeleteElement.js.map
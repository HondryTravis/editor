/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretFinder from '../caret/CaretFinder';
import CaretPosition from '../caret/CaretPosition';
import * as CefUtils from '../keyboard/CefUtils';
import { Arr, Option, Fun } from '@ephox/katamari';
import { getPositionsAbove, findClosestHorizontalPositionFromPoint, getPositionsBelow, getPositionsUntilPreviousLine, getPositionsUntilNextLine, BreakType } from 'tinymce/core/caret/LineReader';
import { findClosestPositionInAboveCell, findClosestPositionInBelowCell } from 'tinymce/core/caret/TableCells';
import ScrollIntoView from 'tinymce/core/dom/ScrollIntoView';
import NodeType from 'tinymce/core/dom/NodeType';
import Settings from 'tinymce/core/api/Settings';
import { Element as SugarElement, Attr, Insert } from '@ephox/sugar';
import { isFakeCaretTableBrowser } from '../caret/FakeCaret';
var moveToRange = function (editor, rng) {
    editor.selection.setRng(rng);
    ScrollIntoView.scrollRangeIntoView(editor, rng);
};
var hasNextBreak = function (getPositionsUntil, scope, lineInfo) {
    return lineInfo.breakAt.map(function (breakPos) { return getPositionsUntil(scope, breakPos).breakAt.isSome(); }).getOr(false);
};
var startsWithWrapBreak = function (lineInfo) { return lineInfo.breakType === BreakType.Wrap && lineInfo.positions.length === 0; };
var startsWithBrBreak = function (lineInfo) { return lineInfo.breakType === BreakType.Br && lineInfo.positions.length === 1; };
var isAtTableCellLine = function (getPositionsUntil, scope, pos) {
    var lineInfo = getPositionsUntil(scope, pos);
    // Since we can't determine if the caret is on the above or below line in a word wrap break we asume it's always
    // on the below/above line based on direction. This will make the caret jump one line if you are at the end of the last
    // line and moving down or at the beginning of the second line moving up.
    if (startsWithWrapBreak(lineInfo) || (!NodeType.isBr(pos.getNode()) && startsWithBrBreak(lineInfo))) {
        return !hasNextBreak(getPositionsUntil, scope, lineInfo);
    }
    else {
        return lineInfo.breakAt.isNone();
    }
};
var isAtFirstTableCellLine = Fun.curry(isAtTableCellLine, getPositionsUntilPreviousLine);
var isAtLastTableCellLine = Fun.curry(isAtTableCellLine, getPositionsUntilNextLine);
var isCaretAtStartOrEndOfTable = function (forward, rng, table) {
    var caretPos = CaretPosition.fromRangeStart(rng);
    return CaretFinder.positionIn(!forward, table).map(function (pos) { return pos.isEqual(caretPos); }).getOr(false);
};
var navigateHorizontally = function (editor, forward, table, td) {
    var rng = editor.selection.getRng();
    var direction = forward ? 1 : -1;
    if (isFakeCaretTableBrowser() && isCaretAtStartOrEndOfTable(forward, rng, table)) {
        var newRng = CefUtils.showCaret(direction, editor, table, !forward, true);
        moveToRange(editor, newRng);
        return true;
    }
    return false;
};
var getClosestAbovePosition = function (root, table, start) {
    return findClosestPositionInAboveCell(table, start).orThunk(function () {
        return Arr.head(start.getClientRects()).bind(function (rect) {
            return findClosestHorizontalPositionFromPoint(getPositionsAbove(root, CaretPosition.before(table)), rect.left);
        });
    }).getOr(CaretPosition.before(table));
};
var getClosestBelowPosition = function (root, table, start) {
    return findClosestPositionInBelowCell(table, start).orThunk(function () {
        return Arr.head(start.getClientRects()).bind(function (rect) {
            return findClosestHorizontalPositionFromPoint(getPositionsBelow(root, CaretPosition.after(table)), rect.left);
        });
    }).getOr(CaretPosition.after(table));
};
var getTable = function (previous, pos) {
    var node = pos.getNode(previous);
    return NodeType.isElement(node) && node.nodeName === 'TABLE' ? Option.some(node) : Option.none();
};
var renderBlock = function (down, editor, table, pos) {
    var forcedRootBlock = Settings.getForcedRootBlock(editor);
    if (forcedRootBlock) {
        editor.undoManager.transact(function () {
            var element = SugarElement.fromTag(forcedRootBlock);
            Attr.setAll(element, Settings.getForcedRootBlockAttrs(editor));
            Insert.append(element, SugarElement.fromTag('br'));
            if (down) {
                Insert.after(SugarElement.fromDom(table), element);
            }
            else {
                Insert.before(SugarElement.fromDom(table), element);
            }
            var rng = editor.dom.createRng();
            rng.setStart(element.dom(), 0);
            rng.setEnd(element.dom(), 0);
            moveToRange(editor, rng);
        });
    }
    else {
        moveToRange(editor, pos.toRange());
    }
};
var moveCaret = function (editor, down, pos) {
    var table = down ? getTable(true, pos) : getTable(false, pos);
    var last = down === false;
    table.fold(function () { return moveToRange(editor, pos.toRange()); }, function (table) {
        return CaretFinder.positionIn(last, editor.getBody()).filter(function (lastPos) { return lastPos.isEqual(pos); }).fold(function () { return moveToRange(editor, pos.toRange()); }, function (_) { return renderBlock(down, editor, table, pos); });
    });
};
var navigateVertically = function (editor, down, table, td) {
    var rng = editor.selection.getRng();
    var pos = CaretPosition.fromRangeStart(rng);
    var root = editor.getBody();
    if (!down && isAtFirstTableCellLine(td, pos)) {
        var newPos = getClosestAbovePosition(root, table, pos);
        moveCaret(editor, down, newPos);
        return true;
    }
    else if (down && isAtLastTableCellLine(td, pos)) {
        var newPos = getClosestBelowPosition(root, table, pos);
        moveCaret(editor, down, newPos);
        return true;
    }
    else {
        return false;
    }
};
var moveH = function (editor, forward) { return function () {
    return Option.from(editor.dom.getParent(editor.selection.getNode(), 'td,th')).bind(function (td) {
        return Option.from(editor.dom.getParent(td, 'table')).map(function (table) {
            return navigateHorizontally(editor, forward, table, td);
        });
    }).getOr(false);
}; };
var moveV = function (editor, forward) { return function () {
    return Option.from(editor.dom.getParent(editor.selection.getNode(), 'td,th')).bind(function (td) {
        return Option.from(editor.dom.getParent(td, 'table')).map(function (table) {
            return navigateVertically(editor, forward, table, td);
        });
    }).getOr(false);
}; };
export { isFakeCaretTableBrowser, moveH, moveV };
//# sourceMappingURL=TableNavigation.js.map
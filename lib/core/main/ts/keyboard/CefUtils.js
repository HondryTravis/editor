/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretPosition from '../caret/CaretPosition';
import * as CaretUtils from '../caret/CaretUtils';
import NodeType from '../dom/NodeType';
var isContentEditableTrue = NodeType.isContentEditableTrue;
var isContentEditableFalse = NodeType.isContentEditableFalse;
var showCaret = function (direction, editor, node, before, scrollIntoView) {
    // TODO: Figure out a better way to handle this dependency
    return editor._selectionOverrides.showCaret(direction, node, before, scrollIntoView);
};
var getNodeRange = function (node) {
    var rng = node.ownerDocument.createRange();
    rng.selectNode(node);
    return rng;
};
var selectNode = function (editor, node) {
    var e = editor.fire('BeforeObjectSelected', { target: node });
    if (e.isDefaultPrevented()) {
        return null;
    }
    return getNodeRange(node);
};
var renderCaretAtRange = function (editor, range, scrollIntoView) {
    var normalizedRange = CaretUtils.normalizeRange(1, editor.getBody(), range);
    var caretPosition = CaretPosition.fromRangeStart(normalizedRange);
    var caretPositionNode = caretPosition.getNode();
    if (isContentEditableFalse(caretPositionNode)) {
        return showCaret(1, editor, caretPositionNode, !caretPosition.isAtEnd(), false);
    }
    var caretPositionBeforeNode = caretPosition.getNode(true);
    if (isContentEditableFalse(caretPositionBeforeNode)) {
        return showCaret(1, editor, caretPositionBeforeNode, false, false);
    }
    // TODO: Should render caret before/after depending on where you click on the page forces after now
    var ceRoot = editor.dom.getParent(caretPosition.getNode(), function (node) { return isContentEditableFalse(node) || isContentEditableTrue(node); });
    if (isContentEditableFalse(ceRoot)) {
        return showCaret(1, editor, ceRoot, false, scrollIntoView);
    }
    return null;
};
var renderRangeCaret = function (editor, range, scrollIntoView) {
    if (!range || !range.collapsed) {
        return range;
    }
    var caretRange = renderCaretAtRange(editor, range, scrollIntoView);
    if (caretRange) {
        return caretRange;
    }
    return range;
};
export { showCaret, selectNode, renderCaretAtRange, renderRangeCaret };
//# sourceMappingURL=CefUtils.js.map
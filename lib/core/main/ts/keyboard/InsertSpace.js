/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import CaretPosition from '../caret/CaretPosition';
import { Element } from '@ephox/sugar';
import { insertNbspAtPosition, insertSpaceAtPosition } from '../caret/InsertText';
import InlineUtils from './InlineUtils';
import BoundaryLocation from './BoundaryLocation';
import { needsToHaveNbsp } from './Nbsps';
import CaretFinder from 'tinymce/core/caret/CaretFinder';
var insertSpaceOrNbspAtPosition = function (root, pos) {
    return needsToHaveNbsp(root, pos) ? insertNbspAtPosition(pos) : insertSpaceAtPosition(pos);
};
var locationToCaretPosition = function (root) { return function (location) {
    return location.fold(function (element) { return CaretFinder.prevPosition(root.dom(), CaretPosition.before(element)); }, function (element) { return CaretFinder.firstPositionIn(element); }, function (element) { return CaretFinder.lastPositionIn(element); }, function (element) { return CaretFinder.nextPosition(root.dom(), CaretPosition.after(element)); });
}; };
var insertInlineBoundarySpaceOrNbsp = function (root, pos) { return function (checkPos) {
    return needsToHaveNbsp(root, checkPos) ? insertNbspAtPosition(pos) : insertSpaceAtPosition(pos);
}; };
var setSelection = function (editor) { return function (pos) {
    editor.selection.setRng(pos.toRange());
    editor.nodeChanged();
    return true;
}; };
var insertSpaceOrNbspAtSelection = function (editor) {
    var pos = CaretPosition.fromRangeStart(editor.selection.getRng());
    var root = Element.fromDom(editor.getBody());
    if (editor.selection.isCollapsed()) {
        var isInlineTarget = Fun.curry(InlineUtils.isInlineTarget, editor);
        var caretPosition = CaretPosition.fromRangeStart(editor.selection.getRng());
        return BoundaryLocation.readLocation(isInlineTarget, editor.getBody(), caretPosition)
            .bind(locationToCaretPosition(root))
            .bind(insertInlineBoundarySpaceOrNbsp(root, pos))
            .exists(setSelection(editor));
    }
    else {
        return false;
    }
};
export { insertSpaceOrNbspAtPosition, insertSpaceOrNbspAtSelection };
//# sourceMappingURL=InsertSpace.js.map
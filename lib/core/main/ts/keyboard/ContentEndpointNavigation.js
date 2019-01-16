/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretPosition from '../caret/CaretPosition';
import { Fun, Arr } from '@ephox/katamari';
import { Insert, Element, Compare, PredicateFind, Node, Attr } from '@ephox/sugar';
import Settings from '../api/Settings';
import { document } from '@ephox/dom-globals';
import * as ElementType from '../dom/ElementType';
import { isAtLastLine, isAtFirstLine } from '../caret/LineReader';
var isTarget = function (node) { return Arr.contains(['figcaption'], Node.name(node)); };
var rangeBefore = function (target) {
    var rng = document.createRange();
    rng.setStartBefore(target.dom());
    rng.setEndBefore(target.dom());
    return rng;
};
var insertElement = function (root, elm, forward) {
    if (forward) {
        Insert.append(root, elm);
    }
    else {
        Insert.prepend(root, elm);
    }
};
var insertBr = function (root, forward) {
    var br = Element.fromTag('br');
    insertElement(root, br, forward);
    return rangeBefore(br);
};
var insertBlock = function (root, forward, blockName, attrs) {
    var block = Element.fromTag(blockName);
    var br = Element.fromTag('br');
    Attr.setAll(block, attrs);
    Insert.append(block, br);
    insertElement(root, block, forward);
    return rangeBefore(br);
};
var insertEmptyLine = function (root, rootBlockName, attrs, forward) {
    if (rootBlockName === '') {
        return insertBr(root, forward);
    }
    else {
        return insertBlock(root, forward, rootBlockName, attrs);
    }
};
var getClosestTargetBlock = function (pos, root) {
    var isRoot = Fun.curry(Compare.eq, root);
    return PredicateFind.closest(Element.fromDom(pos.container()), ElementType.isBlock, isRoot).filter(isTarget);
};
var isAtFirstOrLastLine = function (root, forward, pos) {
    return forward ? isAtLastLine(root.dom(), pos) : isAtFirstLine(root.dom(), pos);
};
var moveCaretToNewEmptyLine = function (editor, forward) {
    var root = Element.fromDom(editor.getBody());
    var pos = CaretPosition.fromRangeStart(editor.selection.getRng());
    var rootBlock = Settings.getForcedRootBlock(editor);
    var rootBlockAttrs = Settings.getForcedRootBlockAttrs(editor);
    return getClosestTargetBlock(pos, root).exists(function () {
        if (isAtFirstOrLastLine(root, forward, pos)) {
            var rng = insertEmptyLine(root, rootBlock, rootBlockAttrs, forward);
            editor.selection.setRng(rng);
            return true;
        }
        else {
            return false;
        }
    });
};
var moveV = function (editor, forward) { return function () {
    if (editor.selection.isCollapsed()) {
        return moveCaretToNewEmptyLine(editor, forward);
    }
    else {
        return false;
    }
}; };
export { moveV };
//# sourceMappingURL=ContentEndpointNavigation.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import NodeType from '../dom/NodeType';
import * as CaretContainer from './CaretContainer';
import { Arr } from '@ephox/katamari';
/**
 * This module contains logic for handling caret candidates. A caret candidate is
 * for example text nodes, images, input elements, cE=false elements etc.
 *
 * @private
 * @class tinymce.caret.CaretCandidate
 */
var isContentEditableTrue = NodeType.isContentEditableTrue;
var isContentEditableFalse = NodeType.isContentEditableFalse;
var isBr = NodeType.isBr;
var isText = NodeType.isText;
var isInvalidTextElement = NodeType.matchNodeNames('script style textarea');
var isAtomicInline = NodeType.matchNodeNames('img input textarea hr iframe video audio object');
var isTable = NodeType.matchNodeNames('table');
var isCaretContainer = CaretContainer.isCaretContainer;
var isCaretCandidate = function (node) {
    if (isCaretContainer(node)) {
        return false;
    }
    if (isText(node)) {
        if (isInvalidTextElement(node.parentNode)) {
            return false;
        }
        return true;
    }
    return isAtomicInline(node) || isBr(node) || isTable(node) || isNonUiContentEditableFalse(node);
};
// UI components on IE is marked with contenteditable=false and unselectable=true so lets not handle those as real content editables
var isUnselectable = function (node) { return NodeType.isElement(node) && node.getAttribute('unselectable') === 'true'; };
var isNonUiContentEditableFalse = function (node) { return isUnselectable(node) === false && isContentEditableFalse(node); };
var isInEditable = function (node, root) {
    for (node = node.parentNode; node && node !== root; node = node.parentNode) {
        if (isNonUiContentEditableFalse(node)) {
            return false;
        }
        if (isContentEditableTrue(node)) {
            return true;
        }
    }
    return true;
};
var isAtomicContentEditableFalse = function (node) {
    if (!isNonUiContentEditableFalse(node)) {
        return false;
    }
    return Arr.foldl(Arr.from(node.getElementsByTagName('*')), function (result, elm) {
        return result || isContentEditableTrue(elm);
    }, false) !== true;
};
var isAtomic = function (node) { return isAtomicInline(node) || isAtomicContentEditableFalse(node); };
var isEditableCaretCandidate = function (node, root) { return isCaretCandidate(node) && isInEditable(node, root); };
export { isCaretCandidate, isInEditable, isAtomic, isEditableCaretCandidate };
//# sourceMappingURL=CaretCandidate.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { getElementFromPosition, getElementFromPrevPosition } from './CaretUtils';
import * as ElementType from '../dom/ElementType';
import { Arr, Fun } from '@ephox/katamari';
import Parents from '../dom/Parents';
import CaretFinder from './CaretFinder';
var isBr = function (pos) { return getElementFromPosition(pos).exists(ElementType.isBr); };
var findBr = function (forward, root, pos) {
    var parentBlocks = Arr.filter(Parents.parentsAndSelf(Element.fromDom(pos.container()), root), ElementType.isBlock);
    var scope = Arr.head(parentBlocks).getOr(root);
    return CaretFinder.fromPosition(forward, scope.dom(), pos).filter(isBr);
};
var isBeforeBr = function (root, pos) {
    return getElementFromPosition(pos).exists(ElementType.isBr) || findBr(true, root, pos).isSome();
};
var isAfterBr = function (root, pos) {
    return getElementFromPrevPosition(pos).exists(ElementType.isBr) || findBr(false, root, pos).isSome();
};
var findPreviousBr = Fun.curry(findBr, false);
var findNextBr = Fun.curry(findBr, true);
export { findPreviousBr, findNextBr, isBeforeBr, isAfterBr };
//# sourceMappingURL=CaretBr.js.map
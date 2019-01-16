/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Option, Fun } from '@ephox/katamari';
import { Compare, Insert, Remove, Element, Traverse } from '@ephox/sugar';
import CaretFinder from '../caret/CaretFinder';
import CaretPosition from '../caret/CaretPosition';
import * as ElementType from '../dom/ElementType';
import Empty from '../dom/Empty';
import PaddingBr from '../dom/PaddingBr';
import Parents from '../dom/Parents';
var getChildrenUntilBlockBoundary = function (block) {
    var children = Traverse.children(block);
    return Arr.findIndex(children, ElementType.isBlock).fold(function () { return children; }, function (index) { return children.slice(0, index); });
};
var extractChildren = function (block) {
    var children = getChildrenUntilBlockBoundary(block);
    Arr.each(children, Remove.remove);
    return children;
};
var removeEmptyRoot = function (rootNode, block) {
    var parents = Parents.parentsAndSelf(block, rootNode);
    return Arr.find(parents.reverse(), Empty.isEmpty).each(Remove.remove);
};
var isEmptyBefore = function (el) { return Arr.filter(Traverse.prevSiblings(el), function (el) { return !Empty.isEmpty(el); }).length === 0; };
var nestedBlockMerge = function (rootNode, fromBlock, toBlock, insertionPoint) {
    if (Empty.isEmpty(toBlock)) {
        PaddingBr.fillWithPaddingBr(toBlock);
        return CaretFinder.firstPositionIn(toBlock.dom());
    }
    if (isEmptyBefore(insertionPoint) && Empty.isEmpty(fromBlock)) {
        Insert.before(insertionPoint, Element.fromTag('br'));
    }
    var position = CaretFinder.prevPosition(toBlock.dom(), CaretPosition.before(insertionPoint.dom()));
    Arr.each(extractChildren(fromBlock), function (child) {
        Insert.before(insertionPoint, child);
    });
    removeEmptyRoot(rootNode, fromBlock);
    return position;
};
var sidelongBlockMerge = function (rootNode, fromBlock, toBlock) {
    if (Empty.isEmpty(toBlock)) {
        Remove.remove(toBlock);
        if (Empty.isEmpty(fromBlock)) {
            PaddingBr.fillWithPaddingBr(fromBlock);
        }
        return CaretFinder.firstPositionIn(fromBlock.dom());
    }
    var position = CaretFinder.lastPositionIn(toBlock.dom());
    Arr.each(extractChildren(fromBlock), function (child) {
        Insert.append(toBlock, child);
    });
    removeEmptyRoot(rootNode, fromBlock);
    return position;
};
var findInsertionPoint = function (toBlock, block) {
    var parentsAndSelf = Parents.parentsAndSelf(block, toBlock);
    return Option.from(parentsAndSelf[parentsAndSelf.length - 1]);
};
var getInsertionPoint = function (fromBlock, toBlock) {
    return Compare.contains(toBlock, fromBlock) ? findInsertionPoint(toBlock, fromBlock) : Option.none();
};
var trimBr = function (first, block) {
    CaretFinder.positionIn(first, block.dom())
        .map(function (position) { return position.getNode(); })
        .map(Element.fromDom)
        .filter(ElementType.isBr)
        .each(Remove.remove);
};
var mergeBlockInto = function (rootNode, fromBlock, toBlock) {
    trimBr(true, fromBlock);
    trimBr(false, toBlock);
    return getInsertionPoint(fromBlock, toBlock).fold(Fun.curry(sidelongBlockMerge, rootNode, fromBlock, toBlock), Fun.curry(nestedBlockMerge, rootNode, fromBlock, toBlock));
};
var mergeBlocks = function (rootNode, forward, block1, block2) {
    return forward ? mergeBlockInto(rootNode, block2, block1) : mergeBlockInto(rootNode, block1, block2);
};
export default {
    mergeBlocks: mergeBlocks
};
//# sourceMappingURL=MergeBlocks.js.map
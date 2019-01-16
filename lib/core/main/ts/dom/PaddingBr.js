/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { Insert, Remove, Element, Node, Text, SelectorFilter, Traverse } from '@ephox/sugar';
import * as ElementType from './ElementType';
var getLastChildren = function (elm) {
    var children = [];
    var rawNode = elm.dom();
    while (rawNode) {
        children.push(Element.fromDom(rawNode));
        rawNode = rawNode.lastChild;
    }
    return children;
};
var removeTrailingBr = function (elm) {
    var allBrs = SelectorFilter.descendants(elm, 'br');
    var brs = Arr.filter(getLastChildren(elm).slice(-1), ElementType.isBr);
    if (allBrs.length === brs.length) {
        Arr.each(brs, Remove.remove);
    }
};
var fillWithPaddingBr = function (elm) {
    Remove.empty(elm);
    Insert.append(elm, Element.fromHtml('<br data-mce-bogus="1">'));
};
var isPaddingContents = function (elm) {
    return Node.isText(elm) ? Text.get(elm) === '\u00a0' : ElementType.isBr(elm);
};
var isPaddedElement = function (elm) {
    return Arr.filter(Traverse.children(elm), isPaddingContents).length === 1;
};
var trimBlockTrailingBr = function (elm) {
    Traverse.lastChild(elm).each(function (lastChild) {
        Traverse.prevSibling(lastChild).each(function (lastChildPrevSibling) {
            if (ElementType.isBlock(elm) && ElementType.isBr(lastChild) && ElementType.isBlock(lastChildPrevSibling)) {
                Remove.remove(lastChild);
            }
        });
    });
};
export default {
    removeTrailingBr: removeTrailingBr,
    fillWithPaddingBr: fillWithPaddingBr,
    isPaddedElement: isPaddedElement,
    trimBlockTrailingBr: trimBlockTrailingBr
};
//# sourceMappingURL=PaddingBr.js.map
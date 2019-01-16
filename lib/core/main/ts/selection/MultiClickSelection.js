/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from 'tinymce/core/caret/CaretPosition';
import { isTextBlock } from 'tinymce/core/dom/ElementType';
import { Element as SugarElement } from '@ephox/sugar';
import NodeType from 'tinymce/core/dom/NodeType';
import CaretFinder from 'tinymce/core/caret/CaretFinder';
import RangeNormalizer from 'tinymce/core/selection/RangeNormalizer';
var isTextBlockNode = function (node) { return NodeType.isElement(node) && isTextBlock(SugarElement.fromDom(node)); };
var normalizeSelection = function (editor) {
    var rng = editor.selection.getRng();
    var startPos = CaretPosition.fromRangeStart(rng);
    var endPos = CaretPosition.fromRangeEnd(rng);
    if (CaretPosition.isElementPosition(startPos)) {
        var container = startPos.container();
        if (isTextBlockNode(container)) {
            CaretFinder.firstPositionIn(container).each(function (pos) { return rng.setStart(pos.container(), pos.offset()); });
        }
    }
    if (CaretPosition.isElementPosition(endPos)) {
        var container = startPos.container();
        if (isTextBlockNode(container)) {
            CaretFinder.lastPositionIn(container).each(function (pos) { return rng.setEnd(pos.container(), pos.offset()); });
        }
    }
    editor.selection.setRng(RangeNormalizer.normalize(rng));
};
var setup = function (editor) {
    editor.on('click', function (e) {
        if (e.detail >= 3) {
            normalizeSelection(editor);
        }
    });
};
export { setup };
//# sourceMappingURL=MultiClickSelection.js.map
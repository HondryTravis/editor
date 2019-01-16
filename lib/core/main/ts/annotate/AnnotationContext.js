/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Unicode } from '@ephox/katamari';
import { Node, Text, Traverse } from '@ephox/sugar';
import { isCaretNode } from 'tinymce/core/fmt/FormatContainer';
import FormatUtils from '../fmt/FormatUtils';
import { isAnnotation } from './Identification';
var isZeroWidth = function (elem) {
    // TODO: I believe this is the same cursor used in tinymce (Unicode.zeroWidth)?
    return Node.isText(elem) && Text.get(elem) === Unicode.zeroWidth();
};
var context = function (editor, elem, wrapName, nodeName) {
    return Traverse.parent(elem).fold(function () { return "skipping" /* Skipping */; }, function (parent) {
        // We used to skip these, but given that they might be representing empty paragraphs, it probably
        // makes sense to treat them just like text nodes
        if (nodeName === 'br' || isZeroWidth(elem)) {
            return "valid" /* Valid */;
        }
        else if (isAnnotation(elem)) {
            return "existing" /* Existing */;
        }
        else if (isCaretNode(elem)) {
            return "caret" /* Caret */;
        }
        else if (!FormatUtils.isValid(editor, wrapName, nodeName) || !FormatUtils.isValid(editor, Node.name(parent), wrapName)) {
            return "invalid-child" /* InvalidChild */;
        }
        else {
            return "valid" /* Valid */;
        }
    });
};
export { context };
//# sourceMappingURL=AnnotationContext.js.map
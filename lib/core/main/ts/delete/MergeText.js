/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Strings } from '@ephox/katamari';
import { Element, Remove } from '@ephox/sugar';
// Don't compare other unicode spaces here, as we're only concerned about whitespace the browser would collapse
var isCollapsibleWhitespace = function (c) { return ' \f\n\r\t\v'.indexOf(c) !== -1; };
var normalizeContent = function (content, isStartOfContent, isEndOfContent) {
    var result = Arr.foldl(content.split(''), function (acc, c) {
        // Are we dealing with a char other than some collapsible whitespace or nbsp? if so then just use it as is
        if (isCollapsibleWhitespace(c) || c === '\u00a0') {
            if (acc.previousCharIsSpace || (acc.str === '' && isStartOfContent) || (acc.str.length === content.length - 1 && isEndOfContent)) {
                return { previousCharIsSpace: false, str: acc.str + '\u00a0' };
            }
            else {
                return { previousCharIsSpace: true, str: acc.str + ' ' };
            }
        }
        else {
            return { previousCharIsSpace: false, str: acc.str + c };
        }
    }, { previousCharIsSpace: false, str: '' });
    return result.str;
};
var normalize = function (node, offset, count) {
    if (count === 0) {
        return;
    }
    // Get the whitespace
    var whitespace = node.data.slice(offset, offset + count);
    // Determine if we're at the end of start of the content
    var isEndOfContent = offset + count >= node.data.length;
    var isStartOfContent = offset === 0;
    // Replace the original whitespace with the normalized whitespace content
    node.replaceData(offset, count, normalizeContent(whitespace, isStartOfContent, isEndOfContent));
};
var normalizeWhitespaceAfter = function (node, offset) {
    var content = node.data.slice(offset);
    var whitespaceCount = content.length - Strings.lTrim(content).length;
    return normalize(node, offset, whitespaceCount);
};
var normalizeWhitespaceBefore = function (node, offset) {
    var content = node.data.slice(0, offset);
    var whitespaceCount = content.length - Strings.rTrim(content).length;
    return normalize(node, offset - whitespaceCount, whitespaceCount);
};
var mergeTextNodes = function (prevNode, nextNode, normalizeWhitespace) {
    var whitespaceOffset = Strings.rTrim(prevNode.data).length;
    // Merge the elements
    prevNode.appendData(nextNode.data);
    Remove.remove(Element.fromDom(nextNode));
    // Normalize the whitespace around the merged elements, to ensure it doesn't get lost
    if (normalizeWhitespace) {
        normalizeWhitespaceAfter(prevNode, whitespaceOffset);
    }
    return prevNode;
};
export { normalizeWhitespaceAfter, normalizeWhitespaceBefore, mergeTextNodes };
//# sourceMappingURL=MergeText.js.map
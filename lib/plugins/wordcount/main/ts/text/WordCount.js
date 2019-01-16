/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import TreeWalker from 'tinymce/core/api/dom/TreeWalker';
import Env from 'tinymce/core/api/Env';
import WordGetter from './WordGetter';
var getText = function (node, schema) {
    var blockElements = schema.getBlockElements();
    var shortEndedElements = schema.getShortEndedElements();
    var whiteSpaceElements = schema.getWhiteSpaceElements();
    var isSeparator = function (node) { return (blockElements[node.nodeName] || shortEndedElements[node.nodeName] || whiteSpaceElements[node.nodeName]); };
    var txt = '';
    var treeWalker = new TreeWalker(node, node);
    while ((node = treeWalker.next())) {
        if (node.nodeType === 3) {
            txt += node.data;
        }
        else if (isSeparator(node)) {
            txt += ' ';
        }
    }
    return txt;
};
var innerText = function (node, schema) {
    return Env.ie ? getText(node, schema) : node.innerText;
};
var getTextContent = function (editor) {
    return editor.removed ? '' : innerText(editor.getBody(), editor.schema);
};
var getCount = function (editor) {
    return WordGetter.getWords(getTextContent(editor)).length;
};
export default {
    getCount: getCount
};
//# sourceMappingURL=WordCount.js.map
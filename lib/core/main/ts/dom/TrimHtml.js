/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import SaxParser from '../api/html/SaxParser';
import Zwsp from '../text/Zwsp';
var trimHtml = function (tempAttrs, html) {
    var trimContentRegExp = new RegExp([
        '\\s?(' + tempAttrs.join('|') + ')="[^"]+"' // Trim temporaty data-mce prefixed attributes like data-mce-selected
    ].join('|'), 'gi');
    return html.replace(trimContentRegExp, '');
};
var trimInternal = function (serializer, html) {
    var content = html;
    var bogusAllRegExp = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g;
    var endTagIndex, index, matchLength, matches, shortEndedElements;
    var schema = serializer.schema;
    content = trimHtml(serializer.getTempAttrs(), content);
    shortEndedElements = schema.getShortEndedElements();
    // Remove all bogus elements marked with "all"
    while ((matches = bogusAllRegExp.exec(content))) {
        index = bogusAllRegExp.lastIndex;
        matchLength = matches[0].length;
        if (shortEndedElements[matches[1]]) {
            endTagIndex = index;
        }
        else {
            endTagIndex = SaxParser.findEndTag(schema, content, index);
        }
        content = content.substring(0, index - matchLength) + content.substring(endTagIndex);
        bogusAllRegExp.lastIndex = index - matchLength;
    }
    return Zwsp.trim(content);
};
// We might need external/internal trimming in the future so lets keep the separation
var trimExternal = trimInternal;
export default {
    trimExternal: trimExternal,
    trimInternal: trimInternal
};
//# sourceMappingURL=TrimHtml.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var internalMimeType = 'x-tinymce/html';
var internalMark = '<!-- ' + internalMimeType + ' -->';
var mark = function (html) {
    return internalMark + html;
};
var unmark = function (html) {
    return html.replace(internalMark, '');
};
var isMarked = function (html) {
    return html.indexOf(internalMark) !== -1;
};
export default {
    mark: mark,
    unmark: unmark,
    isMarked: isMarked,
    internalHtmlMime: function () {
        return internalMimeType;
    }
};
//# sourceMappingURL=InternalHtml.js.map
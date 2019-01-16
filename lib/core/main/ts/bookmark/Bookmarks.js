/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import GetBookmark from './GetBookmark';
import ResolveBookmark from './ResolveBookmark';
import NodeType from '../dom/NodeType';
var getBookmark = function (selection, type, normalized) {
    return GetBookmark.getBookmark(selection, type, normalized);
};
var moveToBookmark = function (selection, bookmark) {
    ResolveBookmark.resolve(selection, bookmark).each(function (rng) {
        selection.setRng(rng);
    });
};
var isBookmarkNode = function (node) {
    return NodeType.isElement(node) && node.tagName === 'SPAN' && node.getAttribute('data-mce-type') === 'bookmark';
};
export default {
    getBookmark: getBookmark,
    moveToBookmark: moveToBookmark,
    isBookmarkNode: isBookmarkNode
};
//# sourceMappingURL=Bookmarks.js.map
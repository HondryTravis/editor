/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var isStringPathBookmark = function (bookmark) { return typeof bookmark.start === 'string'; };
var isRangeBookmark = function (bookmark) { return bookmark.hasOwnProperty('rng'); };
var isIdBookmark = function (bookmark) { return bookmark.hasOwnProperty('id'); };
var isIndexBookmark = function (bookmark) { return bookmark.hasOwnProperty('name'); };
var isPathBookmark = function (bookmark) { return Tools.isArray(bookmark.start); };
export { isStringPathBookmark, isRangeBookmark, isIdBookmark, isIndexBookmark, isPathBookmark };
//# sourceMappingURL=BookmarkTypes.js.map
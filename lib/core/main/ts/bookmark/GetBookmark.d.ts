/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Selection } from '../api/dom/Selection';
import { PathBookmark, IndexBookmark, IdBookmark, Bookmark } from './BookmarkTypes';
declare const _default: {
    getBookmark: (selection: Selection, type: number, normalized: boolean) => Bookmark;
    getUndoBookmark: (selection: Selection) => IndexBookmark | PathBookmark;
    getPersistentBookmark: (selection: Selection, filled: boolean) => IdBookmark | IndexBookmark;
};
export default _default;

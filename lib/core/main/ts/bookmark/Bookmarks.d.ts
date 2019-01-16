/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Selection } from '../api/dom/Selection';
import { Bookmark } from './BookmarkTypes';
import { Node } from '@ephox/dom-globals';
declare const _default: {
    getBookmark: (selection: Selection, type: number, normalized: boolean) => Bookmark;
    moveToBookmark: (selection: Selection, bookmark: Bookmark) => void;
    isBookmarkNode: (node: Node) => boolean;
};
export default _default;

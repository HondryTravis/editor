/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Bookmark } from 'tinymce/core/bookmark/BookmarkTypes';
export declare const enum UndoLevelType {
    Fragmented = "fragmented",
    Complete = "complete"
}
export interface UndoLevel {
    type: UndoLevelType;
    fragments: string[];
    content: string;
    bookmark: Bookmark;
    beforeBookmark: Bookmark;
}
declare const _default: {
    createFragmentedLevel: (fragments: string[]) => UndoLevel;
    createCompleteLevel: (content: string) => UndoLevel;
    createFromEditor: (editor: Editor) => UndoLevel;
    applyToEditor: (editor: Editor, level: UndoLevel, before: boolean) => void;
    isEq: (level1: UndoLevel, level2: UndoLevel) => boolean;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { UndoLevel } from '../undo/Levels';
import { Editor } from 'tinymce/core/api/Editor';
import { Event } from '@ephox/dom-globals';
/**
 * This class handles the undo/redo history levels for the editor. Since the built-in undo/redo has major drawbacks a custom one was needed.
 *
 * @class tinymce.UndoManager
 */
export interface UndoManager {
    data: UndoLevel[];
    typing: boolean;
    add: (level?: UndoLevel, event?: Event) => UndoLevel;
    beforeChange: () => void;
    undo: () => UndoLevel;
    redo: () => UndoLevel;
    clear: () => void;
    hasUndo: () => boolean;
    hasRedo: () => boolean;
    transact: (callback: () => void) => UndoLevel;
    ignore: (callback: () => void) => void;
    extra: (callback1: () => void, callback2: () => void) => void;
}
export default function (editor: Editor): UndoManager;

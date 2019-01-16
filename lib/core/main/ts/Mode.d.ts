/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
declare const enum EditorMode {
    Design = "design",
    ReadOnly = "readonly"
}
declare const setMode: (editor: Editor, mode: EditorMode) => void;
declare const getMode: (editor: Editor) => EditorMode;
declare const isReadOnly: (editor: Editor) => boolean;
export { EditorMode, setMode, getMode, isReadOnly };

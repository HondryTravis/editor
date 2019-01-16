/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { EditorMode } from 'tinymce/core/Mode';
import { HTMLElement } from '@ephox/dom-globals';
declare const _default: {
    firePreProcess: (editor: Editor, args: any) => any;
    firePostProcess: (editor: Editor, args: any) => any;
    fireRemove: (editor: Editor) => any;
    fireSwitchMode: (editor: Editor, mode: EditorMode) => any;
    fireObjectResizeStart: (editor: Editor, target: HTMLElement, width: number, height: number) => void;
    fireObjectResized: (editor: Editor, target: HTMLElement, width: number, height: number) => void;
};
export default _default;

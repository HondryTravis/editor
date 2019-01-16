/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { HTMLElement } from '@ephox/dom-globals';
declare const fireNewRow: (editor: Editor, row: HTMLElement) => any;
declare const fireNewCell: (editor: Editor, cell: HTMLElement) => any;
declare const fireObjectResizeStart: (editor: Editor, target: HTMLElement, width: number, height: number) => void;
declare const fireObjectResized: (editor: Editor, target: HTMLElement, width: number, height: number) => void;
export { fireNewRow, fireNewCell, fireObjectResizeStart, fireObjectResized };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Option, Cell } from '@ephox/katamari';
import { HTMLElement } from '@ephox/dom-globals';
declare const getApi: (editor: Editor, clipboardRows: Cell<Option<any>>) => {
    insertTable: (columns: number, rows: number) => HTMLElement;
    setClipboardRows: (rows: HTMLElement[]) => void;
    getClipboardRows: () => HTMLElement[];
};
export { getApi };

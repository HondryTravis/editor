/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Blob } from '@ephox/dom-globals';
declare const _default: {
    insertTable: (editor: Editor, cols: number, rows: number) => void;
    formatBlock: (editor: Editor, formatName: string) => void;
    insertBlob: (editor: Editor, base64: string, blob: Blob) => void;
    createLink: (editor: Editor, url: string) => void;
    unlink: (editor: Editor) => void;
};
export default _default;

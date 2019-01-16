/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
declare const toggleFormat: (editor: Editor, fmt: string) => () => void;
declare const addFormatChangedListener: (editor: Editor, name: string, changed: (state: boolean, name: string) => void) => void;
declare const postRenderFormatToggle: (editor: Editor, name: string) => (e: any) => void;
export { toggleFormat, addFormatChangedListener, postRenderFormatToggle };

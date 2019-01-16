/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Cell } from '@ephox/katamari';
declare const isEmpty: (editor: Editor, html?: string) => boolean;
declare const hasDraft: (editor: Editor) => boolean;
declare const removeDraft: (editor: Editor, fire?: boolean) => void;
declare const storeDraft: (editor: Editor) => void;
declare const restoreDraft: (editor: Editor) => void;
declare const startStoreDraft: (editor: Editor, started: Cell<boolean>) => void;
declare const restoreLastDraft: (editor: Editor) => void;
export { isEmpty, hasDraft, removeDraft, storeDraft, restoreDraft, startStoreDraft, restoreLastDraft };

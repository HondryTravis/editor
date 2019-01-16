/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { ContextToolbar } from 'tinymce/themes/inlite/core/Render';
export interface InlitePanel {
    show: (editor: Editor, id: string, targetRect: any, toolbars: ContextToolbar[]) => void;
    showForm: (editor: Editor, id: string) => void;
    reposition: (editor: Editor, id: string, targetRect: any) => void;
    inForm: () => boolean;
    hide: () => void;
    focus: () => void;
    remove: () => void;
}
export declare const create: () => InlitePanel;

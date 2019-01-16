/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
export interface SetContentArgs {
    format?: string;
    set?: boolean;
    content?: string;
    no_events?: boolean;
}
declare const setContent: (editor: Editor, content: import("./EditorContent").Content, args?: SetContentArgs) => import("./EditorContent").Content;
export { setContent };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
export interface GetContentArgs {
    format?: string;
    get?: boolean;
    content?: string;
    getInner?: boolean;
    no_events?: boolean;
}
declare const getContent: (editor: Editor, args?: GetContentArgs) => import("./EditorContent").Content;
export { getContent };

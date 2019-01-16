/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
export declare const enum ChildContext {
    Skipping = "skipping",
    Existing = "existing",
    InvalidChild = "invalid-child",
    Caret = "caret",
    Valid = "valid"
}
declare const context: (editor: Editor, elem: any, wrapName: string, nodeName: string) => ChildContext;
export { context };

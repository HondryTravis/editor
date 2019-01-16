/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
declare const _default: {
    isImageUrl: (url: string) => boolean;
    isAbsoluteUrl: (url: string) => boolean;
    insertContent: (editor: Editor, html: string) => void;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { ImageData } from 'tinymce/plugins/image/core/ImageData';
declare const normalizeCss: (editor: Editor, cssText: string) => string;
declare const readImageDataFromSelection: (editor: Editor) => ImageData;
declare const insertOrUpdateImage: (editor: Editor, data: ImageData) => void;
export { normalizeCss, readImageDataFromSelection, insertOrUpdateImage };

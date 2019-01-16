/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { HTMLImageElement } from '@ephox/dom-globals';
import { Editor } from 'tinymce/core/api/Editor';
/**
 * Handles image uploads, updates undo stack and patches over various internal functions.
 *
 * @private
 * @class tinymce.EditorUpload
 */
export default function (editor: Editor): {
    blobCache: import("./file/BlobCache").BlobCache;
    addFilter: (filter: (img: HTMLImageElement) => boolean) => void;
    uploadImages: (callback: any) => any;
    uploadImagesAuto: (callback?: any) => any;
    scanForImages: () => any;
    destroy: () => void;
};

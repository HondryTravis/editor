/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { HTMLElement, HTMLImageElement } from '@ephox/dom-globals';
import { BlobCache, BlobInfo } from 'tinymce/core/api/file/BlobCache';
export interface BlobInfoImagePair {
    image: HTMLImageElement;
    blobInfo: BlobInfo;
}
export interface ImageScanner {
    findAll: (elm: HTMLElement, predicate?: (img: HTMLImageElement) => boolean) => Promise<BlobInfoImagePair[]>;
}
export default function (uploadStatus: any, blobCache: BlobCache): ImageScanner;

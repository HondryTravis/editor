/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Blob } from '@ephox/dom-globals';
export interface BlobCache {
    create: (o: string | BlobInfoData, blob?: Blob, base64?: string, filename?: string) => BlobInfo;
    add: (blobInfo: BlobInfo) => void;
    get: (id: string) => BlobInfo;
    getByUri: (blobUri: string) => BlobInfo;
    findFirst: (predicate: (blobInfo: BlobInfo) => boolean) => any;
    removeByUri: (blobUri: string) => void;
    destroy: () => void;
}
export interface BlobInfoData {
    id?: string;
    name?: string;
    blob: Blob;
    base64: string;
    blobUri?: string;
    uri?: string;
}
export interface BlobInfo {
    id: () => string;
    name: () => string;
    filename: () => string;
    blob: () => Blob;
    base64: () => string;
    blobUri: () => string;
    uri: () => string;
}
export default function (): BlobCache;

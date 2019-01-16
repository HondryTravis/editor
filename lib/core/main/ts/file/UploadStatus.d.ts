/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Holds the current status of a blob uri, if it's pending or uploaded and what the result urls was.
 *
 * @private
 * @class tinymce.file.UploadStatus
 */
export default function (): {
    hasBlobUri: (blobUri: any) => boolean;
    getResultUri: (blobUri: any) => any;
    isPending: (blobUri: any) => boolean;
    isUploaded: (blobUri: any) => boolean;
    markPending: (blobUri: any) => void;
    markUploaded: (blobUri: any, resultUri: any) => void;
    removeFailed: (blobUri: any) => void;
    destroy: () => void;
};

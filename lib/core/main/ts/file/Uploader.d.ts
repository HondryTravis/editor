/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { BlobInfo } from 'tinymce/core/api/file/BlobCache';
/**
 * Upload blobs or blob infos to the specified URL or handler.
 *
 * @private
 * @class tinymce.file.Uploader
 * @example
 * var uploader = new Uploader({
 *     url: '/upload.php',
 *     basePath: '/base/path',
 *     credentials: true,
 *     handler: function(data, success, failure) {
 *         ...
 *     }
 * });
 *
 * uploader.upload(blobInfos).then(function(result) {
 *     ...
 * });
 */
export declare type UploadHandler = (blobInfo: BlobInfo, success: (url: string) => void, failure: (err: string) => void, progress?: (percent: number) => void) => void;
export default function (uploadStatus: any, settings: any): {
    upload: (blobInfos: any, openNotification: any) => Promise<{}>;
};

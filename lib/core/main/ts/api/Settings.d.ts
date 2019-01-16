/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { HTMLImageElement } from '@ephox/dom-globals';
import { UploadHandler } from 'tinymce/core/file/Uploader';
declare const _default: {
    getIframeAttrs: (editor: Editor) => Record<string, string>;
    getDocType: (editor: Editor) => string;
    getDocumentBaseUrl: (editor: Editor) => string;
    getBodyId: (editor: Editor) => string;
    getBodyClass: (editor: Editor) => string;
    getContentSecurityPolicy: (editor: Editor) => string;
    shouldPutBrInPre: (editor: Editor) => boolean;
    getForcedRootBlock: (editor: Editor) => string;
    getForcedRootBlockAttrs: (editor: Editor) => Record<string, string>;
    getBrNewLineSelector: (editor: Editor) => string;
    getNoNewLineSelector: (editor: Editor) => string;
    shouldKeepStyles: (editor: Editor) => boolean;
    shouldEndContainerOnEmptyBlock: (editor: Editor) => boolean;
    getFontStyleValues: (editor: Editor) => string[];
    getFontSizeClasses: (editor: Editor) => string[];
    getImagesDataImgFilter: (editor: Editor) => (imgElm: HTMLImageElement) => boolean;
    isAutomaticUploadsEnabled: (editor: Editor) => boolean;
    shouldReuseFileName: (editor: Editor) => boolean;
    shouldReplaceBlobUris: (editor: Editor) => boolean;
    getImageUploadUrl: (editor: Editor) => string;
    getImageUploadBasePath: (editor: Editor) => string;
    getImagesUploadCredentials: (editor: Editor) => boolean;
    getImagesUploadHandler: (editor: Editor) => UploadHandler;
    shouldUseContentCssCors: (editor: Editor) => boolean;
};
export default _default;

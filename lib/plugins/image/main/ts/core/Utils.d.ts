/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    getImageSize: (url: any, callback: any) => void;
    buildListItems: (inputList: any, itemCallback: any, startItems?: any) => any;
    removePixelSuffix: (value: string) => string;
    addPixelSuffix: (value: string) => string;
    mergeMargins: (css: any) => any;
    createImageList: (editor: any, callback: any) => void;
    waitLoadImage: (editor: any, data: any, imgElm: any) => void;
    blobToDataUri: (blob: any) => Promise<string>;
};
export default _default;

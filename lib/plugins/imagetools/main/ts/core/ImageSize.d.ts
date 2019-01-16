/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare function getImageSize(img: any): {
    w: number;
    h: number;
};
declare function setImageSize(img: any, size: any): void;
declare function getNaturalImageSize(img: any): {
    w: any;
    h: any;
};
declare const _default: {
    getImageSize: typeof getImageSize;
    setImageSize: typeof setImageSize;
    getNaturalImageSize: typeof getNaturalImageSize;
};
export default _default;

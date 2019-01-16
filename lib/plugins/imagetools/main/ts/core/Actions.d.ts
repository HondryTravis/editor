/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    rotate: (editor: any, imageUploadTimerState: any, angle: any) => () => any;
    flip: (editor: any, imageUploadTimerState: any, axis: any) => () => any;
    editImageDialog: (editor: any, imageUploadTimerState: any) => () => void;
    isEditableImage: (editor: any, img: any) => any;
    cancelTimedUpload: (imageUploadTimerState: any) => void;
};
export default _default;

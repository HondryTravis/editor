/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    stubborn: (outerBody: any, cWin: any, page: any, frame: any) => {
        toReading: () => void;
        toEditing: () => void;
        onToolbarTouch: () => void;
        destroy: () => void;
    };
    timid: (outerBody: any, cWin: any, page: any, frame: any) => {
        toReading: () => void;
        toEditing: () => void;
        onToolbarTouch: () => void;
        destroy: (...args: any[]) => void;
    };
};
export default _default;

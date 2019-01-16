/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    get: (outerWindow: any) => {
        isPortrait: (...args: any[]) => any;
    };
    onChange: (outerWindow: any, listeners: any) => {
        onAdjustment: (f: any) => void;
        destroy: () => void;
    };
    getActualWidth: (outerWindow: any) => any;
};
export default _default;

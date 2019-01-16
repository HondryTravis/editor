/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    getRectangles: (cWin: any) => {
        left: (...args: any[]) => any;
        top: (...args: any[]) => any;
        right: (...args: any[]) => any;
        bottom: (...args: any[]) => any;
        width: (...args: any[]) => any;
        height: (...args: any[]) => any;
    }[] | {
        left: any;
        top: any;
        right: any;
        bottom: any;
        width: (...args: any[]) => number;
        height: any;
    }[];
};
export default _default;

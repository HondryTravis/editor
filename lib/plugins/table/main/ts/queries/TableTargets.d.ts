/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
declare const _default: {
    noMenu: (cell: any) => {
        element: (...args: any[]) => any;
        mergable: <T = any>() => Option<T>;
        unmergable: <T = any>() => Option<T>;
        selection: (...args: any[]) => any[];
    };
    forMenu: (selections: any, table: any, cell: any) => {
        element: (...args: any[]) => any;
        mergable: (...args: any[]) => Option<any>;
        unmergable: (...args: any[]) => Option<any>;
        selection: (...args: any[]) => any;
    };
    notCell: (element: any) => {
        element: (...args: any[]) => any;
        mergable: <T = any>() => Option<T>;
        unmergable: <T = any>() => Option<T>;
        selection: (...args: any[]) => any[];
    };
    paste: (...values: any[]) => {
        element: () => any;
        clipboard: () => any;
        generators: () => any;
    };
    pasteRows: (selections: any, table: any, cell: any, clipboard: any, generators: any) => {
        element: (...args: any[]) => any;
        mergable: <T = any>() => Option<T>;
        unmergable: <T = any>() => Option<T>;
        selection: (...args: any[]) => any;
        clipboard: (...args: any[]) => any;
        generators: (...args: any[]) => any;
    };
};
export default _default;

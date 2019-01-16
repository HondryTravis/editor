/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
declare const _default: {
    store: (editor: any) => void;
    storeNative: (editor: any, rng: any) => void;
    readRange: (win: any) => Option<{
        finish: () => any;
        start: () => any;
        soffset: () => any;
        foffset: () => any;
    }>;
    restore: (editor: any) => void;
    getRng: (editor: any) => any;
    getBookmark: (root: any) => Option<{
        finish: () => any;
        start: () => any;
        soffset: () => any;
        foffset: () => any;
    }>;
    validate: (root: any, bookmark: any) => Option<{
        finish: () => any;
        start: () => any;
        soffset: () => any;
        foffset: () => any;
    }>;
};
export default _default;

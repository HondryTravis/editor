/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface RootAttrs {
    [key: string]: string;
}
declare const _default: {
    isPlainText: (text: string) => boolean;
    convert: (text: string, rootTag: string, rootAttrs: RootAttrs) => any;
    toBRs: (text: string) => string;
    toBlockElements: (text: string, rootTag: string, rootAttrs: RootAttrs) => any;
};
export default _default;

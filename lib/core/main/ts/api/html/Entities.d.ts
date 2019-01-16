/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface EntitiesMap {
    [name: string]: string;
}
declare const _default: {
    encodeRaw: (text: string, attr?: boolean) => string;
    encodeAllRaw: (text: string) => string;
    encodeNumeric: (text: string, attr?: boolean) => string;
    encodeNamed: (text: string, attr?: boolean, entities?: EntitiesMap) => string;
    getEncodeFunc: (name: string, entities?: string | EntitiesMap) => (text: string, attr?: boolean) => string;
    decode: (text: string) => string;
};
export default _default;

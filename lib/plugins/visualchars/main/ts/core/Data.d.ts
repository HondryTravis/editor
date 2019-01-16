/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    charMap: {
        '\u00a0': string;
        '\u00ad': string;
    };
    regExp: RegExp;
    regExpGlobal: RegExp;
    selector: string;
    charMapToRegExp: (charMap: any, global?: any) => RegExp;
    charMapToSelector: (charMap: any) => string;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface UrlPattern {
    regex: RegExp;
    type: string;
    w: number;
    h: number;
    url: string;
    allowFullscreen: boolean;
}
declare const matchPattern: (url: string) => UrlPattern;
export { matchPattern };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Blob } from '@ephox/dom-globals';
declare const _default: {
    traverse: (json: any, path: any) => any;
    readBlob: (blob: any) => Promise<{}>;
    requestUrlAsBlob: (url: string, headers: Record<string, string>, withCredentials: boolean) => Promise<{
        status: number;
        blob: Blob;
    }>;
    parseJson: (text: any) => any;
};
export default _default;

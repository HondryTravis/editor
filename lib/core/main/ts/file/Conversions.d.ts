/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Blob } from '@ephox/dom-globals';
declare const _default: {
    uriToBlob: (url: string) => Promise<Blob>;
    blobToDataUri: (blob: Blob) => Promise<string>;
    parseDataUri: (uri: string) => {
        type: any;
        data: string;
    };
};
export default _default;

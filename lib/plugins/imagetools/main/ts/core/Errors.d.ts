/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    handleServiceErrorResponse: (status: any, blob: any) => Promise<never>;
    handleHttpError: (status: any) => Promise<never>;
    getHttpErrorMsg: (status: any) => string;
    getServiceErrorMsg: (type: any) => string;
};
export default _default;

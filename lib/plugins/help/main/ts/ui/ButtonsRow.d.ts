/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    makeRow: () => ({
        type: string;
        html: any;
        flex?: undefined;
        text?: undefined;
        onclick?: undefined;
    } | {
        type: string;
        flex: number;
        html?: undefined;
        text?: undefined;
        onclick?: undefined;
    } | {
        text: string;
        onclick(): void;
        type?: undefined;
        html?: undefined;
        flex?: undefined;
    })[];
};
export default _default;

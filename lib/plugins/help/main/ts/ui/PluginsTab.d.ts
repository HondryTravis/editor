/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    makeTab: (editor: any) => {
        title: string;
        type: string;
        style: string;
        layout: string;
        padding: number;
        spacing: number;
        items: {
            type: string;
            html: string;
            flex: number;
        }[];
    };
};
export default _default;

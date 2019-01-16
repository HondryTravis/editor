/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    hasSidebar: (editor: any) => boolean;
    createSidebar: (editor: any) => {
        type: string;
        name: string;
        layout: string;
        classes: string;
        items: {
            type: string;
            layout: string;
            classes: string;
            items: any[];
        }[];
    };
};
export default _default;

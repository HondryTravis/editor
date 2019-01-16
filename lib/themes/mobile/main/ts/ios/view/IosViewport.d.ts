/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Adt } from '@ephox/katamari';
declare const _default: {
    findFixtures: (container: any) => Adt[];
    takeover: (viewport: any, contentBody: any, toolbar: any, dropup: any) => {
        setViewportOffset: (newYOffset: any) => void;
        isExpanding: () => boolean;
        isShrinking: () => boolean;
        refresh: () => void;
        restore: () => void;
    };
    getYFixedData: (element: any) => number;
};
export default _default;

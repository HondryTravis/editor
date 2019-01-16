/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Future } from '@ephox/katamari';
declare const _default: {
    moveScrollAndTop: (element: any, destination: any, finalTop: any) => Future<any>;
    moveOnlyScroll: (element: any, destination: any) => Future<any>;
    moveOnlyTop: (element: any, destination: any) => Future<any>;
    moveWindowScroll: (toolbar: any, viewport: any, destY: any) => Future<any>;
};
export default _default;

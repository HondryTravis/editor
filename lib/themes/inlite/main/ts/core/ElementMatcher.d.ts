/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { HTMLElement } from '@ephox/dom-globals';
declare const _default: {
    element: (element: HTMLElement, predicateIds: any) => (editor: any) => {
        id: string;
        rect: GeomRect;
    };
    parent: (elements: HTMLElement[], predicateIds: any) => (editor: any) => {
        id: string;
        rect: GeomRect;
    };
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { GeomRect } from 'tinymce/core/api/geom/Rect';
declare const _default: {
    calcInsert: (targetRect: GeomRect, contentAreaRect: GeomRect, panelRect: GeomRect) => {
        rect: any;
        position: any;
    };
    calc: (targetRect: GeomRect, contentAreaRect: GeomRect, panelRect: GeomRect) => {
        rect: any;
        position: any;
    };
    userConstrain: (handler: any, targetRect: GeomRect, contentAreaRect: GeomRect, panelRect: GeomRect) => GeomRect;
    defaultHandler: (rects: any) => any;
};
export default _default;

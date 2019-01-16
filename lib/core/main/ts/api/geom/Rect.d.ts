/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Contains various tools for rect/position calculation.
 *
 * @class tinymce.geom.Rect
 */
export interface GeomRect {
    x: number;
    y: number;
    w: number;
    h: number;
}
declare const _default: {
    inflate: (rect: any, w: any, h: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    relativePosition: (rect: any, targetRect: any, rel: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    findBestRelativePosition: (rect: any, targetRect: any, constrainRect: any, rels: any) => any;
    intersect: (rect: any, cropRect: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    clamp: (rect: any, clampRect: any, fixedSize?: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    create: (x: any, y: any, w: any, h: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
    fromClientRect: (clientRect: any) => {
        x: any;
        y: any;
        w: any;
        h: any;
    };
};
export default _default;

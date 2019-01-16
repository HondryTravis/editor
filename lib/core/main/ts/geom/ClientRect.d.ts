/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface ClientRect {
    left: number;
    top: number;
    bottom: number;
    right: number;
    width: number;
    height: number;
}
declare const clone: (rect: ClientRect) => ClientRect;
declare const collapse: (rect: ClientRect, toStart: boolean) => ClientRect;
declare const isEqual: (rect1: ClientRect, rect2: ClientRect) => boolean;
declare const isAbove: (rect1: ClientRect, rect2: ClientRect) => boolean;
declare const isBelow: (rect1: ClientRect, rect2: ClientRect) => boolean;
declare const isLeft: (rect1: ClientRect, rect2: ClientRect) => boolean;
declare const isRight: (rect1: ClientRect, rect2: ClientRect) => boolean;
declare const compare: (rect1: ClientRect, rect2: ClientRect) => number;
declare const containsXY: (rect: ClientRect, clientX: number, clientY: number) => boolean;
declare const getOverflow: (outer: ClientRect, inner: ClientRect) => {
    x: number;
    y: number;
};
export { clone, collapse, isEqual, isAbove, isBelow, isLeft, isRight, compare, containsXY, getOverflow };

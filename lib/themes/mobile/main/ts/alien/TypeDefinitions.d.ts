/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { HTMLElement } from '@ephox/dom-globals';
export interface AdtInterface {
    fold: <T>(...fn: Array<(...x: any[]) => T>) => T;
    match: <T>(branches: {
        [k: string]: (...x: any[]) => T;
    }) => T;
    log: (label: string) => string;
}
export interface SugarElement {
    dom: () => HTMLElement;
}
export interface SugarEvent {
    kill: () => void;
    prevent: () => void;
    raw: () => any;
    stop: () => void;
    target: () => SugarElement;
    x: () => number;
    y: () => number;
}
export interface PositionCoordinates {
    left: () => number;
    top: () => number;
    translate: (x: number, y: number) => PositionCoordinates;
}

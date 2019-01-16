/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretPosition from './CaretPosition';
import * as ClientRect from '../geom/ClientRect';
import { Node } from '@ephox/dom-globals';
export interface ClientRectLine extends ClientRect.ClientRect {
    line: number;
}
export declare enum VDirection {
    Up = -1,
    Down = 1
}
declare type RectPredicate = (rect: ClientRectLine) => boolean;
declare const upUntil: (root: Node, predicateFn: RectPredicate, caretPosition: CaretPosition) => ClientRectLine[];
declare const downUntil: (root: Node, predicateFn: RectPredicate, caretPosition: CaretPosition) => ClientRectLine[];
declare const positionsUntil: (direction: VDirection, root: Node, predicateFn: RectPredicate, node: Node) => ClientRectLine[];
declare const isAboveLine: (lineNumber: number) => (clientRect: ClientRectLine) => boolean;
declare const isLine: (lineNumber: number) => (clientRect: ClientRectLine) => boolean;
export { upUntil, downUntil, positionsUntil, isAboveLine, isLine };

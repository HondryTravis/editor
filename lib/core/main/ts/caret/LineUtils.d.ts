/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { NodeClientRect } from '../dom/Dimensions';
import { ClientRectLine } from 'tinymce/core/caret/LineWalker';
import { Node, ClientRect, HTMLElement } from '@ephox/dom-globals';
export interface CaretInfo {
    node: Node;
    before: boolean;
}
declare const findClosestClientRect: (clientRects: ClientRect[], clientX: number) => NodeClientRect;
declare const findLineNodeRects: (root: Node, targetNodeRect: NodeClientRect) => ClientRectLine[];
declare const closestCaret: (root: HTMLElement, clientX: number, clientY: number) => CaretInfo;
export { findClosestClientRect, findLineNodeRects, closestCaret };

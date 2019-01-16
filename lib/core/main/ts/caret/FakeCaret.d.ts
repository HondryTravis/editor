/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element, Range, HTMLElement, Node } from '@ephox/dom-globals';
export interface FakeCaret {
    show: (before: boolean, element: Element) => Range;
    hide: () => void;
    getCss: () => string;
    reposition: () => void;
    destroy: () => void;
}
export declare const FakeCaret: (root: HTMLElement, isBlock: (node: Node) => boolean, hasFocus: () => boolean) => FakeCaret;
export declare const isFakeCaretTableBrowser: () => boolean;
export declare const isFakeCaretTarget: (node: Node) => boolean;

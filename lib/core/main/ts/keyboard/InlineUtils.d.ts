/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import CaretPosition from '../caret/CaretPosition';
import { Editor } from 'tinymce/core/api/Editor';
import { Node } from '@ephox/dom-globals';
declare type NormalisePostionFn = (pos: CaretPosition) => CaretPosition;
declare const _default: {
    isInlineTarget: (editor: Editor, elm: Node) => boolean;
    findRootInline: (isInlineTarget: (node: Node) => boolean, rootNode: Node, pos: CaretPosition) => Option<Node>;
    isRtl: (element: Node) => boolean;
    isAtZwsp: (pos: CaretPosition) => boolean;
    normalizePosition: (forward: boolean, pos: CaretPosition) => CaretPosition;
    normalizeForwards: NormalisePostionFn;
    normalizeBackwards: NormalisePostionFn;
    hasSameParentBlock: (rootNode: Node, node1: Node, node2: Node) => boolean;
};
export default _default;

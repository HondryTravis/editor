/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretPosition from './CaretPosition';
import { Node } from '@ephox/dom-globals';
declare const _default: {
    removeAndReposition: (container: Node, pos: CaretPosition) => CaretPosition;
    remove: (caretContainerNode: Node) => void;
};
export default _default;

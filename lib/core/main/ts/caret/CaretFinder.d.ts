/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import CaretPosition from './CaretPosition';
import { Node, Element } from '@ephox/dom-globals';
declare const _default: {
    fromPosition: (forward: boolean, root: Node, pos: CaretPosition) => Option<CaretPosition>;
    nextPosition: (root: Node, pos: CaretPosition) => Option<CaretPosition>;
    prevPosition: (root: Node, pos: CaretPosition) => Option<CaretPosition>;
    navigate: (forward: boolean, root: Element, from: CaretPosition) => Option<CaretPosition>;
    positionIn: (forward: boolean, element: Element) => Option<CaretPosition>;
    firstPositionIn: (element: Element) => Option<CaretPosition>;
    lastPositionIn: (element: Element) => Option<CaretPosition>;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import CaretPosition from '../caret/CaretPosition';
declare const _default: {
    mergeBlocks: (rootNode: Element, forward: Boolean, block1: Element, block2: Element) => Option<CaretPosition>;
};
export default _default;

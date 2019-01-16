/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Node, Range } from '@ephox/dom-globals';
declare const read: (root: Node, forward: boolean, rng: Range) => Option<any>;
export { read };

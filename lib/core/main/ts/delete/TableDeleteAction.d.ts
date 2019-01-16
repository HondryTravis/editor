/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Adt, Option } from '@ephox/katamari';
import { Range } from '@ephox/dom-globals';
declare const _default: {
    getActionFromRange: (root: any, rng: Range) => Option<Adt>;
    getActionFromCells: (cells: any) => Adt;
};
export default _default;

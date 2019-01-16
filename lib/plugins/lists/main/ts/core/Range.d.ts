/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Range, Node } from '@ephox/dom-globals';
interface Point {
    container: Node;
    offset: number;
}
declare const _default: {
    getNormalizedPoint: (container: Node, offset: number) => Point;
    normalizeRange: (rng: Range) => Range;
};
export default _default;

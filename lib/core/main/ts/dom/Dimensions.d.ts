/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import * as ClientRect from '../geom/ClientRect';
import { HTMLElement, Node } from '@ephox/dom-globals';
export interface NodeClientRect extends ClientRect.ClientRect {
    node: HTMLElement;
}
declare const getClientRects: (node: Node[]) => NodeClientRect[];
export { getClientRects };

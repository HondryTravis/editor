/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Range, Node } from '@ephox/dom-globals';
declare const getSelectedNode: (range: Range) => Node;
declare const getNode: (container: Node, offset: number) => Node;
export { getSelectedNode, getNode };

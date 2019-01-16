/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Node } from '@ephox/dom-globals';
declare const isCaretNode: (node: Node) => boolean;
declare const getParentCaretContainer: (body: any, node: any) => any;
export { isCaretNode, getParentCaretContainer };

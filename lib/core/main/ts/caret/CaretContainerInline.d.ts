/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Node, Text } from '@ephox/dom-globals';
declare const insertInline: (before: boolean, node: Node) => Text;
declare const insertInlineBefore: (node: Node) => Text;
declare const insertInlineAfter: (node: Node) => Text;
export { insertInline, insertInlineBefore, insertInlineAfter };

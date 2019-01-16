/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Text } from '@ephox/dom-globals';
declare const normalizeWhitespaceAfter: (node: Text, offset: number) => void;
declare const normalizeWhitespaceBefore: (node: Text, offset: number) => void;
declare const mergeTextNodes: (prevNode: Text, nextNode: Text, normalizeWhitespace?: boolean) => Text;
export { normalizeWhitespaceAfter, normalizeWhitespaceBefore, mergeTextNodes };

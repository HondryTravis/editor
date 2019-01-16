/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from 'tinymce/core/caret/CaretPosition';
import { Node, Element, Range } from '@ephox/dom-globals';
declare const isCaretContainerBlock: (node: Node) => boolean;
declare const isCaretContainerInline: (node: Node) => boolean;
declare const isCaretContainer: (node: Node) => boolean;
declare const hasContent: (node: Node) => boolean;
declare const insertInline: (node: Node, before: boolean) => Node;
declare const prependInline: (node: Node) => Node;
declare const appendInline: (node: Node) => Node;
declare const isBeforeInline: (pos: CaretPosition) => boolean;
declare const isAfterInline: (pos: CaretPosition) => boolean;
declare const insertBlock: (blockName: string, node: Node, before: boolean) => Node;
declare const startsWithCaretContainer: (node: Node) => boolean;
declare const endsWithCaretContainer: (node: Node) => boolean;
declare const showCaretContainerBlock: (caretContainer: Element) => Element;
declare const isRangeInCaretContainerBlock: (range: Range) => boolean;
export { isCaretContainer, isCaretContainerBlock, isCaretContainerInline, showCaretContainerBlock, insertInline, prependInline, appendInline, isBeforeInline, isAfterInline, insertBlock, hasContent, startsWithCaretContainer, endsWithCaretContainer, isRangeInCaretContainerBlock };

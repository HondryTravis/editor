/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from 'tinymce/core/caret/CaretPosition';
import { Option } from '@ephox/katamari';
import { HDirection } from 'tinymce/core/caret/CaretWalker';
import { Node, Range } from '@ephox/dom-globals';
import { Element } from '@ephox/sugar';
declare const isForwards: (direction: HDirection) => boolean;
declare const isBackwards: (direction: HDirection) => boolean;
declare const findNode: (node: Node, direction: number, predicateFn: (node: Node) => boolean, rootNode: Node, shallow?: boolean) => Node;
declare const getEditingHost: (node: Node, rootNode: Node) => Node;
declare const getParentBlock: (node: Node, rootNode?: Node) => Node;
declare const isInSameBlock: (caretPosition1: CaretPosition, caretPosition2: CaretPosition, rootNode?: Node) => boolean;
declare const isInSameEditingHost: (caretPosition1: CaretPosition, caretPosition2: CaretPosition, rootNode?: Node) => boolean;
declare const normalizeRange: (direction: number, root: Node, range: Range) => Range;
declare const getRelativeCefElm: (forward: boolean, caretPosition: CaretPosition) => Option<Node>;
declare const getNormalizedRangeEndPoint: (direction: number, root: Node, range: Range) => CaretPosition;
declare const isBeforeContentEditableFalse: (caretPosition: CaretPosition) => boolean;
declare const isAfterContentEditableFalse: (caretPosition: CaretPosition) => boolean;
declare const isBeforeTable: (caretPosition: CaretPosition) => boolean;
declare const isAfterTable: (caretPosition: CaretPosition) => boolean;
declare const isBeforeSpace: (pos: CaretPosition) => boolean;
declare const isAfterSpace: (pos: CaretPosition) => boolean;
declare const getElementFromPosition: (pos: CaretPosition) => Option<Element>;
declare const getElementFromPrevPosition: (pos: CaretPosition) => Option<Element>;
export { isForwards, isBackwards, findNode, getEditingHost, getParentBlock, isInSameBlock, isInSameEditingHost, isBeforeContentEditableFalse, isAfterContentEditableFalse, isBeforeTable, isAfterTable, isBeforeSpace, isAfterSpace, normalizeRange, getRelativeCefElm, getNormalizedRangeEndPoint, getElementFromPosition, getElementFromPrevPosition };

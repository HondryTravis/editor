/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Range, ClientRect, Node } from '@ephox/dom-globals';
export interface CaretPosition {
    container: () => Node;
    offset: () => number;
    toRange: () => Range;
    getClientRects: () => ClientRect[];
    isVisible: () => boolean;
    isAtStart: () => boolean;
    isAtEnd: () => boolean;
    isEqual: (caretPosition: CaretPosition) => boolean;
    getNode: (before?: boolean) => Node;
}
/**
 * Represents a location within the document by a container and an offset.
 *
 * @constructor
 * @param {Node} container Container node.
 * @param {Number} offset Offset within that container node.
 * @param {Array} clientRects Optional client rects array for the position.
 */
export declare function CaretPosition(container: Node, offset: number, clientRects?: any): CaretPosition;
export declare namespace CaretPosition {
    /**
     * Creates a caret position from the start of a range.
     *
     * @method fromRangeStart
     * @param {DOMRange} range DOM Range to create caret position from.
     * @return {tinymce.caret.CaretPosition} Caret position from the start of DOM range.
     */
    const fromRangeStart: (range: Range) => CaretPosition;
    /**
     * Creates a caret position from the end of a range.
     *
     * @method fromRangeEnd
     * @param {DOMRange} range DOM Range to create caret position from.
     * @return {tinymce.caret.CaretPosition} Caret position from the end of DOM range.
     */
    const fromRangeEnd: (range: Range) => CaretPosition;
    /**
     * Creates a caret position from a node and places the offset after it.
     *
     * @method after
     * @param {Node} node Node to get caret position from.
     * @return {tinymce.caret.CaretPosition} Caret position from the node.
     */
    const after: (node: Node) => CaretPosition;
    /**
     * Creates a caret position from a node and places the offset before it.
     *
     * @method before
     * @param {Node} node Node to get caret position from.
     * @return {tinymce.caret.CaretPosition} Caret position from the node.
     */
    const before: (node: Node) => CaretPosition;
    const isAbove: (pos1: CaretPosition, pos2: CaretPosition) => boolean;
    const isBelow: (pos1: CaretPosition, pos2: CaretPosition) => boolean;
    const isAtStart: (pos: CaretPosition) => boolean;
    const isAtEnd: (pos: CaretPosition) => boolean;
    const isTextPosition: (pos: CaretPosition) => boolean;
    const isElementPosition: (pos: CaretPosition) => boolean;
}
export default CaretPosition;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import CaretPosition from '../caret/CaretPosition';
import { Node } from '@ephox/dom-globals';
declare const create: (root: Node, caretPosition: CaretPosition) => string;
declare const resolve: (root: Node, path: string) => CaretPosition;
export { 
/**
 * Create a xpath bookmark location for the specified caret position.
 *
 * @method create
 * @param {Node} rootNode Root node to create bookmark within.
 * @param {tinymce.caret.CaretPosition} caretPosition Caret position within the root node.
 * @return {String} String xpath like location of caret position.
 */
create, 
/**
 * Resolves a xpath like bookmark location to the a caret position.
 *
 * @method resolve
 * @param {Node} rootNode Root node to resolve xpath bookmark within.
 * @param {String} bookmark Bookmark string to resolve.
 * @return {tinymce.caret.CaretPosition} Caret position resolved from xpath like bookmark.
 */
resolve };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { CaretPosition } from './CaretPosition';
declare const isAtStartOfBlock: (root: Element, pos: CaretPosition) => boolean;
declare const isAtEndOfBlock: (root: Element, pos: CaretPosition) => boolean;
export { isAtStartOfBlock, isAtEndOfBlock };

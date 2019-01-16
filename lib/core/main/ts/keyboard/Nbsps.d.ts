/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from '../caret/CaretPosition';
import { Element } from '@ephox/sugar';
import { Editor } from '../api/Editor';
declare const needsToHaveNbsp: (root: Element, pos: CaretPosition) => boolean;
declare const normalizeNbspMiddle: (text: string) => string;
declare const normalizeNbspsInEditor: (editor: Editor) => void;
export { needsToHaveNbsp, normalizeNbspMiddle, normalizeNbspsInEditor };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import CaretPosition from '../caret/CaretPosition';
import { Editor } from '../api/Editor';
import { Element } from '@ephox/sugar';
declare const insertSpaceOrNbspAtPosition: (root: Element, pos: CaretPosition) => Option<CaretPosition>;
declare const insertSpaceOrNbspAtSelection: (editor: Editor) => boolean;
export { insertSpaceOrNbspAtPosition, insertSpaceOrNbspAtSelection };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from '../caret/CaretPosition';
import { Option } from '@ephox/katamari';
declare const insertTextAtPosition: (text: string, pos: CaretPosition) => Option<CaretPosition>;
declare const insertNbspAtPosition: (pos: CaretPosition) => Option<CaretPosition>;
declare const insertSpaceAtPosition: (pos: CaretPosition) => Option<CaretPosition>;
export { insertTextAtPosition, insertNbspAtPosition, insertSpaceAtPosition };

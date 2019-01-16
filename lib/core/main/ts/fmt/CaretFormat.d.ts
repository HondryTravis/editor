/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import CaretPosition from '../caret/CaretPosition';
import { Editor } from '../api/Editor';
declare const applyCaretFormat: (editor: any, name: any, vars: any) => void;
declare const removeCaretFormat: (editor: Editor, name: any, vars: any, similar: any) => void;
declare const setup: (editor: Editor) => void;
declare const replaceWithCaretFormat: (targetNode: any, formatNodes: any) => CaretPosition;
declare const isFormatElement: (editor: Editor, element: Element) => boolean;
declare const isEmptyCaretFormatElement: (element: Element) => boolean;
export { setup, applyCaretFormat, removeCaretFormat, replaceWithCaretFormat, isFormatElement, isEmptyCaretFormatElement };

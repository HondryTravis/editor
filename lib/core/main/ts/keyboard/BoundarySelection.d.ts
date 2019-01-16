/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Cell } from '@ephox/katamari';
import CaretPosition from '../caret/CaretPosition';
import { Editor } from 'tinymce/core/api/Editor';
import { Text } from '@ephox/dom-globals';
declare type MoveWordFn = (editor: Editor, caret: Cell<Text>) => () => boolean;
declare const _default: {
    move: (editor: Editor, caret: Cell<Text>, forward: boolean) => () => any;
    moveNextWord: MoveWordFn;
    movePrevWord: MoveWordFn;
    setupSelectedState: (editor: Editor) => Cell<Text>;
    setCaretPosition: (editor: Editor, pos: CaretPosition) => void;
};
export default _default;

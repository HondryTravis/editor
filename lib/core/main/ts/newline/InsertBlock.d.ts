/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { KeyboardEvent } from '@ephox/dom-globals';
import { Editor } from '../api/Editor';
import { EditorEvent } from '../api/dom/EventUtils';
declare const _default: {
    insert: (editor: Editor, evt: EditorEvent<KeyboardEvent>) => void;
};
export default _default;

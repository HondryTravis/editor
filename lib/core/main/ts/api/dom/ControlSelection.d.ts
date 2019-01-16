/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Selection } from './Selection';
import { Editor } from 'tinymce/core/api/Editor';
import { Element, Event } from '@ephox/dom-globals';
interface ControlSelection {
    isResizable: (elm: Element) => boolean;
    showResizeRect: (elm: Element) => void;
    hideResizeRect: () => void;
    updateResizeRect: (evt: Event) => void;
    destroy: () => void;
}
declare const ControlSelection: (selection: Selection, editor: Editor) => ControlSelection;
export default ControlSelection;

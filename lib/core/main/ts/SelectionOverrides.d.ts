/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Range, Element } from '@ephox/dom-globals';
interface SelectionOverrides {
    showCaret: (direction: number, node: Element, before: boolean, scrollIntoView?: boolean) => Range;
    showBlockCaretContainer: (blockCaretContainer: Element) => void;
    hideFakeCaret: () => void;
    destroy: () => void;
}
declare const SelectionOverrides: (editor: Editor) => SelectionOverrides;
export default SelectionOverrides;

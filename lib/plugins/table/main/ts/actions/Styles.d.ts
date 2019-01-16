/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { DOMUtils } from 'tinymce/core/api/dom/DOMUtils';
import { Element } from '@ephox/dom-globals';
declare const _default: {
    applyAlign: (editor: Editor, elm: Element, name: string) => void;
    applyVAlign: (editor: Editor, elm: Element, name: string) => void;
    unApplyAlign: (editor: Editor, elm: Element) => void;
    unApplyVAlign: (editor: Editor, elm: Element) => void;
    getTDTHOverallStyle: (dom: DOMUtils, elm: Element, name: string) => string;
};
export default _default;

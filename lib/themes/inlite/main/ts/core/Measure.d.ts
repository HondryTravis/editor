/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { HTMLElement } from '@ephox/dom-globals';
declare const _default: {
    getElementRect: (editor: Editor, elm: HTMLElement) => GeomRect;
    getPageAreaRect: (editor: Editor) => GeomRect;
    getContentAreaRect: (editor: Editor) => GeomRect;
    getSelectionRect: (editor: Editor) => GeomRect;
};
export default _default;

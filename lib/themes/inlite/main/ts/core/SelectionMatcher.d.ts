/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { Element } from '@ephox/dom-globals';
declare const _default: {
    textSelection: (id: string) => (editor: Editor) => {
        id: string;
        rect: GeomRect;
    };
    emptyTextBlock: (elements: Element[], id: string) => (editor: any) => {
        id: string;
        rect: GeomRect;
    };
};
export default _default;

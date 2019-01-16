/**
 * SelectionMatcher.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
import { GeomRect } from 'tinymce/core/api/geom/Rect';
declare const _default: {
    textSelection: (id: any) => (editor: any) => {
        id: string;
        rect: GeomRect;
    };
    emptyTextBlock: (elements: any, id: any) => (editor: any) => {
        id: string;
        rect: GeomRect;
    };
};
export default _default;

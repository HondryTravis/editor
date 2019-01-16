/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { GeomRect } from 'tinymce/core/api/geom/Rect';
declare const _default: {
    match: (editor: Editor, matchers: any) => any;
    result: (id: string, rect: GeomRect) => {
        id: string;
        rect: GeomRect;
    };
};
export default _default;

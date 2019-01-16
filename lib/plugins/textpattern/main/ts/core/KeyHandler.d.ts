/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { PatternSet } from '../api/Pattern';
declare const _default: {
    handleEnter: (editor: Editor, patternSet: PatternSet) => void;
    handleInlineKey: (editor: Editor, patternSet: PatternSet) => void;
    checkCharCode: (chars: any, event: any) => boolean;
    checkKeyCode: (codes: any, event: any) => boolean;
};
export default _default;

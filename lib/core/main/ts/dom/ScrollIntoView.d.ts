/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { HTMLElement, Range } from '@ephox/dom-globals';
declare const _default: {
    scrollElementIntoView: (editor: Editor, elm: HTMLElement, alignToTop: boolean) => void;
    scrollRangeIntoView: (editor: Editor, rng: Range) => void;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Element, Range } from '@ephox/dom-globals';
declare const showCaret: (direction: any, editor: Editor, node: Element, before: boolean, scrollIntoView: boolean) => Range;
declare const selectNode: (editor: any, node: Element) => Range;
declare const renderCaretAtRange: (editor: Editor, range: Range, scrollIntoView: boolean) => Range;
declare const renderRangeCaret: (editor: Editor, range: Range, scrollIntoView: boolean) => Range;
export { showCaret, selectNode, renderCaretAtRange, renderRangeCaret };

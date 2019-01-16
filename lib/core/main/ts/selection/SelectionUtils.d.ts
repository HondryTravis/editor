/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Range } from '@ephox/dom-globals';
declare const hasAllContentsSelected: (elm: any, rng: any) => boolean;
declare const moveEndPoint: (dom: any, rng: Range, node: any, start: boolean) => void;
declare const hasAnyRanges: (editor: Editor) => boolean;
export { hasAllContentsSelected, moveEndPoint, hasAnyRanges };

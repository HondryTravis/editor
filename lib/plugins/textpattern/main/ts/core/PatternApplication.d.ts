/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { InlinePattern, BlockPattern, ReplacementPattern } from '../api/Pattern';
import { Editor } from 'tinymce/core/api/Editor';
declare const applyInlinePatternSpace: (editor: Editor, patterns: InlinePattern[]) => void;
declare const applyInlinePatternEnter: (editor: Editor, patterns: InlinePattern[]) => void;
declare const applyBlockPattern: (editor: Editor, patterns: BlockPattern[]) => void;
declare const applyReplacementPattern: (editor: Editor, patterns: ReplacementPattern[], inline: boolean) => void;
declare const applyReplacementPatternSpace: (editor: Editor, patterns: ReplacementPattern[]) => void;
declare const applyReplacementPatternEnter: (editor: Editor, patterns: ReplacementPattern[]) => void;
export { applyReplacementPattern, applyReplacementPatternSpace, applyReplacementPatternEnter, applyInlinePatternSpace, applyInlinePatternEnter, applyBlockPattern };

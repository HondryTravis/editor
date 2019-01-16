/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { LastSuggestion } from '../core/Actions';
import { Editor } from 'tinymce/core/api/Editor';
import { Cell } from '@ephox/katamari';
import { DomTextMatcher } from 'tinymce/plugins/spellchecker/core/DomTextMatcher';
declare const _default: {
    setup: (editor: Editor, pluginUrl: string, lastSuggestionsState: Cell<LastSuggestion>, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>, currentLanguageState: Cell<string>) => void;
};
export default _default;

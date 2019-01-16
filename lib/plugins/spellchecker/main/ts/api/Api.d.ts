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
    get: (editor: Editor, startedState: Cell<boolean>, lastSuggestionsState: Cell<LastSuggestion>, textMatcherState: Cell<DomTextMatcher>, currentLanguageState: Cell<string>, url: string) => {
        getTextMatcher: () => DomTextMatcher;
        getWordCharPattern: () => any;
        markErrors: (data: string) => void;
        getLanguage: () => string;
    };
};
export default _default;

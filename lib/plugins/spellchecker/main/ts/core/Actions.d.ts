/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { DomTextMatcher } from './DomTextMatcher';
import { Editor } from 'tinymce/core/api/Editor';
import { Cell } from '@ephox/katamari';
import { Element, HTMLElement } from '@ephox/dom-globals';
export declare type Data = string | {
    words: Record<string, string[]>;
    dictionary?: any;
};
export interface LastSuggestion {
    suggestions: string | string[];
    hasDictionarySupport: boolean;
}
declare const _default: {
    spellcheck: (editor: Editor, pluginUrl: string, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>, lastSuggestionsState: Cell<LastSuggestion>, currentLanguageState: Cell<string>) => void;
    checkIfFinished: (editor: Editor, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>) => void;
    addToDictionary: (editor: Editor, pluginUrl: string, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>, currentLanguageState: Cell<string>, word: string, spans: Element[]) => void;
    ignoreWord: (editor: Editor, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>, word: string, spans: Element[], all?: boolean) => void;
    findSpansByIndex: (editor: Editor, index: string) => any[];
    getElmIndex: (elm: HTMLElement) => string;
    markErrors: (editor: Editor, startedState: Cell<boolean>, textMatcherState: Cell<DomTextMatcher>, lastSuggestionsState: Cell<LastSuggestion>, data: Data) => void;
};
export default _default;

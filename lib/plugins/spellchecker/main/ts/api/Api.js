/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from './Settings';
import Actions from '../core/Actions';
var get = function (editor, startedState, lastSuggestionsState, textMatcherState, currentLanguageState, url) {
    var getLanguage = function () {
        return currentLanguageState.get();
    };
    var getWordCharPattern = function () {
        return Settings.getSpellcheckerWordcharPattern(editor);
    };
    var markErrors = function (data) {
        Actions.markErrors(editor, startedState, textMatcherState, lastSuggestionsState, data);
    };
    var getTextMatcher = function () {
        return textMatcherState.get();
    };
    return {
        getTextMatcher: getTextMatcher,
        getWordCharPattern: getWordCharPattern,
        markErrors: markErrors,
        getLanguage: getLanguage
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
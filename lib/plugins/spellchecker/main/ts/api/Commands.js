/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Actions from '../core/Actions';
var register = function (editor, pluginUrl, startedState, textMatcherState, lastSuggestionsState, currentLanguageState) {
    editor.addCommand('mceSpellCheck', function () {
        Actions.spellcheck(editor, pluginUrl, startedState, textMatcherState, lastSuggestionsState, currentLanguageState);
    });
};
export default {
    register: register
};
//# sourceMappingURL=Commands.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Cell } from '@ephox/katamari';
import PluginManager from 'tinymce/core/api/PluginManager';
import DetectProPlugin from './alien/DetectProPlugin';
import Api from './api/Api';
import Commands from './api/Commands';
import Settings from './api/Settings';
import Buttons from './ui/Buttons';
import SuggestionsMenu from './ui/SuggestionsMenu';
PluginManager.add('spellchecker', function (editor, pluginUrl) {
    if (DetectProPlugin.hasProPlugin(editor) === false) {
        var startedState = Cell(false);
        var currentLanguageState = Cell(Settings.getLanguage(editor));
        var textMatcherState = Cell(null);
        var lastSuggestionsState = Cell(null);
        Buttons.register(editor, pluginUrl, startedState, textMatcherState, currentLanguageState, lastSuggestionsState);
        SuggestionsMenu.setup(editor, pluginUrl, lastSuggestionsState, startedState, textMatcherState, currentLanguageState);
        Commands.register(editor, pluginUrl, startedState, textMatcherState, lastSuggestionsState, currentLanguageState);
        return Api.get(editor, startedState, lastSuggestionsState, textMatcherState, currentLanguageState, pluginUrl);
    }
});
export default function () { }
//# sourceMappingURL=Plugin.js.map
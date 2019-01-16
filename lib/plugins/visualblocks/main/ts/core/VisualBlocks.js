/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Events from '../api/Events';
import Settings from '../api/Settings';
import LoadCss from './LoadCss';
var toggleVisualBlocks = function (editor, pluginUrl, enabledState) {
    var dom = editor.dom;
    var contentCss = Settings.getContentCss(editor);
    LoadCss.load(editor.getDoc(), contentCss ? contentCss : pluginUrl + '/css/visualblocks.css');
    dom.toggleClass(editor.getBody(), 'mce-visualblocks');
    enabledState.set(!enabledState.get());
    Events.fireVisualBlocks(editor, enabledState.get());
};
export default {
    toggleVisualBlocks: toggleVisualBlocks
};
//# sourceMappingURL=VisualBlocks.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import DOMUtils from 'tinymce/core/api/dom/DOMUtils';
import Events from '../api/Events';
import Settings from '../api/Settings';
var fireSkinLoaded = function (editor, callback) {
    var done = function () {
        editor._skinLoaded = true;
        Events.fireSkinLoaded(editor);
        callback();
    };
    if (editor.initialized) {
        done();
    }
    else {
        editor.on('init', done);
    }
};
var load = function (editor, callback) {
    var skinUrl = Settings.getSkinUrl(editor);
    var done = function () {
        fireSkinLoaded(editor, callback);
    };
    if (Settings.isSkinDisabled(editor)) {
        done();
    }
    else {
        DOMUtils.DOM.styleSheetLoader.load(skinUrl + '/skin.min.css', done);
        editor.contentCSS.push(skinUrl + '/content.inline.min.css');
    }
};
export default {
    load: load
};
//# sourceMappingURL=SkinLoader.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from '../api/Settings';
var setup = function (editor) {
    var $ = editor.$, tocClass = Settings.getTocClass(editor);
    editor.on('PreProcess', function (e) {
        var $tocElm = $('.' + tocClass, e.node);
        if ($tocElm.length) {
            $tocElm.removeAttr('contentEditable');
            $tocElm.find('[contenteditable]').removeAttr('contentEditable');
        }
    });
    editor.on('SetContent', function () {
        var $tocElm = $('.' + tocClass);
        if ($tocElm.length) {
            $tocElm.attr('contentEditable', false);
            $tocElm.children(':first-child').attr('contentEditable', true);
        }
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=FilterContent.js.map
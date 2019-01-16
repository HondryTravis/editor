/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import PanelHtml from './PanelHtml';
var insertEmoticon = function (editor, src, alt) {
    editor.insertContent(editor.dom.createHTML('img', { src: src, alt: alt }));
};
var register = function (editor, pluginUrl) {
    var panelHtml = PanelHtml.getHtml(pluginUrl);
    editor.addButton('emoticons', {
        type: 'panelbutton',
        panel: {
            role: 'application',
            autohide: true,
            html: panelHtml,
            onclick: function (e) {
                var linkElm = editor.dom.getParent(e.target, 'a');
                if (linkElm) {
                    insertEmoticon(editor, linkElm.getAttribute('data-mce-url'), linkElm.getAttribute('data-mce-alt'));
                    this.hide();
                }
            }
        },
        tooltip: 'Emoticons'
    });
};
export default {
    register: register
};
//# sourceMappingURL=Buttons.js.map
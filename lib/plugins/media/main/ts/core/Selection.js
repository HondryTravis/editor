/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import UpdateHtml from './UpdateHtml';
var setup = function (editor) {
    editor.on('click keyup', function () {
        var selectedNode = editor.selection.getNode();
        if (selectedNode && editor.dom.hasClass(selectedNode, 'mce-preview-object')) {
            if (editor.dom.getAttrib(selectedNode, 'data-mce-selected')) {
                selectedNode.setAttribute('data-mce-selected', '2');
            }
        }
    });
    editor.on('ObjectSelected', function (e) {
        var objectType = e.target.getAttribute('data-mce-object');
        if (objectType === 'audio' || objectType === 'script') {
            e.preventDefault();
        }
    });
    editor.on('objectResized', function (e) {
        var target = e.target;
        var html;
        if (target.getAttribute('data-mce-object')) {
            html = target.getAttribute('data-mce-html');
            if (html) {
                html = unescape(html);
                target.setAttribute('data-mce-html', escape(UpdateHtml.updateHtml(html, {
                    width: e.width,
                    height: e.height
                })));
            }
        }
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=Selection.js.map
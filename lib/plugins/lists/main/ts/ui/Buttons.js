/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
import NodeType from '../core/NodeType';
var findIndex = function (list, predicate) {
    for (var index = 0; index < list.length; index++) {
        var element = list[index];
        if (predicate(element)) {
            return index;
        }
    }
    return -1;
};
var listState = function (editor, listName) {
    return function (e) {
        var ctrl = e.control;
        editor.on('NodeChange', function (e) {
            var tableCellIndex = findIndex(e.parents, NodeType.isTableCellNode);
            var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
            var lists = Tools.grep(parents, NodeType.isListNode);
            ctrl.active(lists.length > 0 && lists[0].nodeName === listName);
        });
    };
};
var register = function (editor) {
    var hasPlugin = function (editor, plugin) {
        var plugins = editor.settings.plugins ? editor.settings.plugins : '';
        return Tools.inArray(plugins.split(/[ ,]/), plugin) !== -1;
    };
    if (!hasPlugin(editor, 'advlist')) {
        editor.addButton('numlist', {
            active: false,
            title: 'Numbered list',
            cmd: 'InsertOrderedList',
            onPostRender: listState(editor, 'OL')
        });
        editor.addButton('bullist', {
            active: false,
            title: 'Bullet list',
            cmd: 'InsertUnorderedList',
            onPostRender: listState(editor, 'UL')
        });
    }
    editor.addButton('indent', {
        icon: 'indent',
        title: 'Increase indent',
        cmd: 'Indent'
    });
};
export default {
    register: register
};
//# sourceMappingURL=Buttons.js.map
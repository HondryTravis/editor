/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var isAnchorNode = function (node) {
    return !node.attr('href') && (node.attr('id') || node.attr('name')) && !node.firstChild;
};
var setContentEditable = function (state) {
    return function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (isAnchorNode(nodes[i])) {
                nodes[i].attr('contenteditable', state);
            }
        }
    };
};
var setup = function (editor) {
    editor.on('PreInit', function () {
        editor.parser.addNodeFilter('a', setContentEditable('false'));
        editor.serializer.addNodeFilter('a', setContentEditable(null));
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=FilterContent.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Data from './Data';
import Nodes from './Nodes';
import { Arr } from '@ephox/katamari';
import { Element, Node } from '@ephox/sugar';
var show = function (editor, rootElm) {
    var node, div;
    var nodeList = Nodes.filterDescendants(Element.fromDom(rootElm), Nodes.isMatch);
    Arr.each(nodeList, function (n) {
        var withSpans = Nodes.replaceWithSpans(Node.value(n));
        div = editor.dom.create('div', null, withSpans);
        while ((node = div.lastChild)) {
            editor.dom.insertAfter(node, n.dom());
        }
        editor.dom.remove(n.dom());
    });
};
var hide = function (editor, body) {
    var nodeList = editor.dom.select(Data.selector, body);
    Arr.each(nodeList, function (node) {
        editor.dom.remove(node, 1);
    });
};
var toggle = function (editor) {
    var body = editor.getBody();
    var bookmark = editor.selection.getBookmark();
    var parentNode = Nodes.findParentElm(editor.selection.getNode(), body);
    // if user does select all the parentNode will be undefined
    parentNode = parentNode !== undefined ? parentNode : body;
    hide(editor, parentNode);
    show(editor, parentNode);
    editor.selection.moveToBookmark(bookmark);
};
export default {
    show: show,
    hide: hide,
    toggle: toggle
};
//# sourceMappingURL=VisualChars.js.map
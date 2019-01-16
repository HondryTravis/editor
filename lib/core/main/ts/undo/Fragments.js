/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Entities from '../api/html/Entities';
import Diff from './Diff';
import NodeType from 'tinymce/core/dom/NodeType';
import { document } from '@ephox/dom-globals';
import { Arr } from '@ephox/katamari';
/**
 * This module reads and applies html fragments from/to dom nodes.
 *
 * @class tinymce.undo.Fragments
 * @private
 */
var getOuterHtml = function (elm) {
    if (NodeType.isElement(elm)) {
        return elm.outerHTML;
    }
    else if (NodeType.isText(elm)) {
        return Entities.encodeRaw(elm.data, false);
    }
    else if (NodeType.isComment(elm)) {
        return '<!--' + elm.data + '-->';
    }
    return '';
};
var createFragment = function (html) {
    var frag, node, container;
    container = document.createElement('div');
    frag = document.createDocumentFragment();
    if (html) {
        container.innerHTML = html;
    }
    while ((node = container.firstChild)) {
        frag.appendChild(node);
    }
    return frag;
};
var insertAt = function (elm, html, index) {
    var fragment = createFragment(html);
    if (elm.hasChildNodes() && index < elm.childNodes.length) {
        var target = elm.childNodes[index];
        target.parentNode.insertBefore(fragment, target);
    }
    else {
        elm.appendChild(fragment);
    }
};
var removeAt = function (elm, index) {
    if (elm.hasChildNodes() && index < elm.childNodes.length) {
        var target = elm.childNodes[index];
        target.parentNode.removeChild(target);
    }
};
var applyDiff = function (diff, elm) {
    var index = 0;
    Arr.each(diff, function (action) {
        if (action[0] === Diff.KEEP) {
            index++;
        }
        else if (action[0] === Diff.INSERT) {
            insertAt(elm, action[1], index);
            index++;
        }
        else if (action[0] === Diff.DELETE) {
            removeAt(elm, index);
        }
    });
};
var read = function (elm) {
    return Arr.filter(Arr.map(Arr.from(elm.childNodes), getOuterHtml), function (item) {
        return item.length > 0;
    });
};
var write = function (fragments, elm) {
    var currentFragments = Arr.map(Arr.from(elm.childNodes), getOuterHtml);
    applyDiff(Diff.diff(currentFragments, fragments), elm);
    return elm;
};
export default {
    read: read,
    write: write
};
//# sourceMappingURL=Fragments.js.map
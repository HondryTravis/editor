/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import NodeType from 'tinymce/core/dom/NodeType';
var isAfterNbsp = function (container, offset) {
    return NodeType.isText(container) && container.nodeValue[offset - 1] === '\u00a0';
};
var trimOrPadLeftRight = function (rng, html) {
    var container, offset;
    container = rng.startContainer;
    offset = rng.startOffset;
    var hasSiblingText = function (siblingName) {
        return container[siblingName] && container[siblingName].nodeType === 3;
    };
    if (container.nodeType === 3) {
        if (offset > 0) {
            html = html.replace(/^&nbsp;/, ' ');
        }
        else if (!hasSiblingText('previousSibling')) {
            html = html.replace(/^ /, '&nbsp;');
        }
        if (offset < container.length) {
            html = html.replace(/&nbsp;(<br>|)$/, ' ');
        }
        else if (!hasSiblingText('nextSibling')) {
            html = html.replace(/(&nbsp;| )(<br>|)$/, '&nbsp;');
        }
    }
    return html;
};
// Removes &nbsp; from a [b] c -> a &nbsp;c -> a c
var trimNbspAfterDeleteAndPadValue = function (rng, value) {
    var container, offset;
    container = rng.startContainer;
    offset = rng.startOffset;
    if (container.nodeType === 3 && rng.collapsed) {
        if (container.data[offset] === '\u00a0') {
            container.deleteData(offset, 1);
            if (!/[\u00a0| ]$/.test(value)) {
                value += ' ';
            }
        }
        else if (container.data[offset - 1] === '\u00a0') {
            container.deleteData(offset - 1, 1);
            if (!/[\u00a0| ]$/.test(value)) {
                value = ' ' + value;
            }
        }
    }
    return value;
};
export { isAfterNbsp, trimNbspAfterDeleteAndPadValue, trimOrPadLeftRight };
//# sourceMappingURL=NbspTrim.js.map
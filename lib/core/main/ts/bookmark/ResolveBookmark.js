/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option, Options } from '@ephox/katamari';
import Env from '../api/Env';
import * as CaretBookmark from './CaretBookmark';
import CaretPosition from '../caret/CaretPosition';
import NodeType from '../dom/NodeType';
import Tools from '../api/util/Tools';
import { getParentCaretContainer } from 'tinymce/core/fmt/FormatContainer';
import Zwsp from 'tinymce/core/text/Zwsp';
import CaretFinder from 'tinymce/core/caret/CaretFinder';
import { isPathBookmark, isStringPathBookmark, isIdBookmark, isIndexBookmark, isRangeBookmark } from './BookmarkTypes';
var addBogus = function (dom, node) {
    // Adds a bogus BR element for empty block elements
    if (dom.isBlock(node) && !node.innerHTML && !Env.ie) {
        node.innerHTML = '<br data-mce-bogus="1" />';
    }
    return node;
};
var resolveCaretPositionBookmark = function (dom, bookmark) {
    var rng, pos;
    rng = dom.createRng();
    pos = CaretBookmark.resolve(dom.getRoot(), bookmark.start);
    rng.setStart(pos.container(), pos.offset());
    pos = CaretBookmark.resolve(dom.getRoot(), bookmark.end);
    rng.setEnd(pos.container(), pos.offset());
    return rng;
};
var insertZwsp = function (node, rng) {
    var textNode = node.ownerDocument.createTextNode(Zwsp.ZWSP);
    node.appendChild(textNode);
    rng.setStart(textNode, 0);
    rng.setEnd(textNode, 0);
};
var isEmpty = function (node) { return node.hasChildNodes() === false; };
var tryFindRangePosition = function (node, rng) {
    return CaretFinder.lastPositionIn(node).fold(function () { return false; }, function (pos) {
        rng.setStart(pos.container(), pos.offset());
        rng.setEnd(pos.container(), pos.offset());
        return true;
    });
};
// Since we trim zwsp from undo levels the caret format containers
// may be empty if so pad them with a zwsp and move caret there
var padEmptyCaretContainer = function (root, node, rng) {
    if (isEmpty(node) && getParentCaretContainer(root, node)) {
        insertZwsp(node, rng);
        return true;
    }
    else {
        return false;
    }
};
var setEndPoint = function (dom, start, bookmark, rng) {
    var point = bookmark[start ? 'start' : 'end'];
    var i, node, offset, children;
    var root = dom.getRoot();
    if (point) {
        offset = point[0];
        // Find container node
        for (node = root, i = point.length - 1; i >= 1; i--) {
            children = node.childNodes;
            if (padEmptyCaretContainer(root, node, rng)) {
                return true;
            }
            if (point[i] > children.length - 1) {
                if (padEmptyCaretContainer(root, node, rng)) {
                    return true;
                }
                return tryFindRangePosition(node, rng);
            }
            node = children[point[i]];
        }
        // Move text offset to best suitable location
        if (node.nodeType === 3) {
            offset = Math.min(point[0], node.nodeValue.length);
        }
        // Move element offset to best suitable location
        if (node.nodeType === 1) {
            offset = Math.min(point[0], node.childNodes.length);
        }
        // Set offset within container node
        if (start) {
            rng.setStart(node, offset);
        }
        else {
            rng.setEnd(node, offset);
        }
    }
    return true;
};
var isValidTextNode = function (node) { return NodeType.isText(node) && node.data.length > 0; };
var restoreEndPoint = function (dom, suffix, bookmark) {
    var marker = dom.get(bookmark.id + '_' + suffix), node, idx, next, prev;
    var keep = bookmark.keep;
    var container, offset;
    if (marker) {
        node = marker.parentNode;
        if (suffix === 'start') {
            if (!keep) {
                idx = dom.nodeIndex(marker);
            }
            else {
                if (marker.hasChildNodes()) {
                    node = marker.firstChild;
                    idx = 1;
                }
                else if (isValidTextNode(marker.nextSibling)) {
                    node = marker.nextSibling;
                    idx = 0;
                }
                else if (isValidTextNode(marker.previousSibling)) {
                    node = marker.previousSibling;
                    idx = marker.previousSibling.data.length;
                }
                else {
                    node = marker.parentNode;
                    idx = dom.nodeIndex(marker) + 1;
                }
            }
            container = node;
            offset = idx;
        }
        else {
            if (!keep) {
                idx = dom.nodeIndex(marker);
            }
            else {
                if (marker.hasChildNodes()) {
                    node = marker.firstChild;
                    idx = 1;
                }
                else if (isValidTextNode(marker.previousSibling)) {
                    node = marker.previousSibling;
                    idx = marker.previousSibling.data.length;
                }
                else {
                    node = marker.parentNode;
                    idx = dom.nodeIndex(marker);
                }
            }
            container = node;
            offset = idx;
        }
        if (!keep) {
            prev = marker.previousSibling;
            next = marker.nextSibling;
            // Remove all marker text nodes
            Tools.each(Tools.grep(marker.childNodes), function (node) {
                if (NodeType.isText(node)) {
                    node.nodeValue = node.nodeValue.replace(/\uFEFF/g, '');
                }
            });
            // Remove marker but keep children if for example contents where inserted into the marker
            // Also remove duplicated instances of the marker for example by a
            // split operation or by WebKit auto split on paste feature
            while ((marker = dom.get(bookmark.id + '_' + suffix))) {
                dom.remove(marker, true);
            }
            // If siblings are text nodes then merge them unless it's Opera since it some how removes the node
            // and we are sniffing since adding a lot of detection code for a browser with 3% of the market
            // isn't worth the effort. Sorry, Opera but it's just a fact
            if (prev && next && prev.nodeType === next.nodeType && NodeType.isText(prev) && !Env.opera) {
                idx = prev.nodeValue.length;
                prev.appendData(next.nodeValue);
                dom.remove(next);
                if (suffix === 'start') {
                    container = prev;
                    offset = idx;
                }
                else {
                    container = prev;
                    offset = idx;
                }
            }
        }
        return Option.some(CaretPosition(container, offset));
    }
    else {
        return Option.none();
    }
};
var alt = function (o1, o2) { return o1.isSome() ? o1 : o2; };
var resolvePaths = function (dom, bookmark) {
    var rng = dom.createRng();
    if (setEndPoint(dom, true, bookmark, rng) && setEndPoint(dom, false, bookmark, rng)) {
        return Option.some(rng);
    }
    else {
        return Option.none();
    }
};
var resolveId = function (dom, bookmark) {
    var startPos = restoreEndPoint(dom, 'start', bookmark);
    var endPos = restoreEndPoint(dom, 'end', bookmark);
    return Options.liftN([
        startPos,
        alt(endPos, startPos)
    ], function (spos, epos) {
        var rng = dom.createRng();
        rng.setStart(addBogus(dom, spos.container()), spos.offset());
        rng.setEnd(addBogus(dom, epos.container()), epos.offset());
        return rng;
    });
};
var resolveIndex = function (dom, bookmark) {
    return Option.from(dom.select(bookmark.name)[bookmark.index]).map(function (elm) {
        var rng = dom.createRng();
        rng.selectNode(elm);
        return rng;
    });
};
var resolve = function (selection, bookmark) {
    var dom = selection.dom;
    if (bookmark) {
        if (isPathBookmark(bookmark)) {
            return resolvePaths(dom, bookmark);
        }
        else if (isStringPathBookmark(bookmark)) {
            return Option.some(resolveCaretPositionBookmark(dom, bookmark));
        }
        else if (isIdBookmark(bookmark)) {
            return resolveId(dom, bookmark);
        }
        else if (isIndexBookmark(bookmark)) {
            return resolveIndex(dom, bookmark);
        }
        else if (isRangeBookmark(bookmark)) {
            return Option.some(bookmark.rng);
        }
    }
    return Option.none();
};
export default {
    resolve: resolve
};
//# sourceMappingURL=ResolveBookmark.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Option } from '@ephox/katamari';
import { Attr, Class, Compare, Element, Node, SelectorFilter, SelectorFind, Traverse } from '@ephox/sugar';
import * as Markings from './Markings';
// Given the current editor selection, identify the uid of any current
// annotation
var identify = function (editor, annotationName) {
    var rng = editor.selection.getRng();
    var start = Element.fromDom(rng.startContainer);
    var root = Element.fromDom(editor.getBody());
    var selector = annotationName.fold(function () { return '.' + Markings.annotation(); }, function (an) { return "[" + Markings.dataAnnotation() + "=\"" + an + "\"]"; });
    var newStart = Traverse.child(start, rng.startOffset).getOr(start);
    var closest = SelectorFind.closest(newStart, selector, function (n) {
        return Compare.eq(n, root);
    });
    var getAttr = function (c, property) {
        if (Attr.has(c, property)) {
            return Option.some(Attr.get(c, property));
        }
        else {
            return Option.none();
        }
    };
    return closest.bind(function (c) {
        return getAttr(c, "" + Markings.dataAnnotationId()).bind(function (uid) {
            return getAttr(c, "" + Markings.dataAnnotation()).map(function (name) {
                var elements = findMarkers(editor, uid);
                return {
                    uid: uid,
                    name: name,
                    elements: elements
                };
            });
        });
    });
};
var isAnnotation = function (elem) {
    return Node.isElement(elem) && Class.has(elem, Markings.annotation());
};
var findMarkers = function (editor, uid) {
    var body = Element.fromDom(editor.getBody());
    return SelectorFilter.descendants(body, "[" + Markings.dataAnnotationId() + "=\"" + uid + "\"]");
};
var findAll = function (editor, name) {
    var body = Element.fromDom(editor.getBody());
    var markers = SelectorFilter.descendants(body, "[" + Markings.dataAnnotation() + "=\"" + name + "\"]");
    var directory = {};
    Arr.each(markers, function (m) {
        var uid = Attr.get(m, Markings.dataAnnotationId());
        var nodesAlready = directory.hasOwnProperty(uid) ? directory[uid] : [];
        directory[uid] = nodesAlready.concat([m]);
    });
    return directory;
};
export { identify, isAnnotation, findAll };
//# sourceMappingURL=Identification.js.map
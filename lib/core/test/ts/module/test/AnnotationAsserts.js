import * as tslib_1 from "tslib";
import { ApproxStructure, Assertions, Step } from '@ephox/agar';
import { Arr, Obj } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
var sAnnotate = function (editor, name, uid, data) { return Step.sync(function () {
    editor.annotator.annotate(name, tslib_1.__assign({ uid: uid }, data));
}); };
// This will result in an attribute order-insensitive HTML assertion
var sAssertHtmlContent = function (tinyApis, children) {
    return tinyApis.sAssertContentStructure(ApproxStructure.build(function (s, str, arr) {
        return s.element('body', {
            children: Arr.map(children, ApproxStructure.fromHtml)
        });
    }));
};
var assertMarker = function (editor, expected, nodes) {
    var uid = expected.uid, name = expected.name;
    Arr.each(nodes, function (node) {
        Assertions.assertEq('Wrapper must be in content', true, editor.getBody().contains(node));
        Assertions.assertStructure('Checking wrapper has correct decoration', ApproxStructure.build(function (s, str, arr) {
            return s.element('span', {
                attrs: {
                    'data-mce-annotation': str.is(name),
                    'data-mce-annotation-uid': str.is(uid)
                }
            });
        }), Element.fromDom(node));
    });
};
var sAssertGetAll = function (editor, expected, name) { return Step.sync(function () {
    var annotations = editor.annotator.getAll(name);
    var keys = Obj.keys(annotations);
    var sortedKeys = Arr.sort(keys);
    var expectedKeys = Arr.sort(Obj.keys(expected));
    Assertions.assertEq('Checking keys of getAll response', expectedKeys, sortedKeys);
    Obj.each(annotations, function (markers, uid) {
        Assertions.assertEq('Checking number of markers for uid', expected[uid], markers.length);
        Arr.each(markers, function (marker) {
            assertMarker(editor, { uid: uid, name: name }, marker);
        });
    });
}); };
export { sAnnotate, sAssertHtmlContent, sAssertGetAll, assertMarker };
//# sourceMappingURL=AnnotationAsserts.js.map
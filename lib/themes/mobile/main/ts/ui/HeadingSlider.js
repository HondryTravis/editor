/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import { Compare, Element, Node, PredicateFind } from '@ephox/sugar';
import * as UiDomFactory from '../util/UiDomFactory';
import SizeSlider from './SizeSlider';
import * as ToolbarWidgets from './ToolbarWidgets';
var headings = ['p', 'h3', 'h2', 'h1'];
var makeSlider = function (spec) {
    return SizeSlider.sketch({
        category: 'heading',
        sizes: headings,
        onChange: spec.onChange,
        getInitialValue: spec.getInitialValue
    });
};
var sketch = function (realm, editor) {
    var spec = {
        onChange: function (value) {
            editor.execCommand('FormatBlock', null, headings[value].toLowerCase());
        },
        getInitialValue: function () {
            var node = editor.selection.getStart();
            var elem = Element.fromDom(node);
            var heading = PredicateFind.closest(elem, function (e) {
                var nodeName = Node.name(e);
                return Arr.contains(headings, nodeName);
            }, function (e) {
                return Compare.eq(e, Element.fromDom(editor.getBody()));
            });
            return heading.bind(function (elm) { return Arr.indexOf(headings, Node.name(elm)); }).getOr(0);
        }
    };
    return ToolbarWidgets.button(realm, 'heading', function () {
        return [
            UiDomFactory.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-heading ${prefix}-icon"></span>'),
            makeSlider(spec),
            UiDomFactory.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-heading ${prefix}-icon"></span>')
        ];
    });
};
export { sketch };
//# sourceMappingURL=HeadingSlider.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import SizeSlider from './SizeSlider';
import * as ToolbarWidgets from './ToolbarWidgets';
import FontSizes from '../util/FontSizes';
import * as UiDomFactory from '../util/UiDomFactory';
var sizes = FontSizes.candidates();
var makeSlider = function (spec) {
    return SizeSlider.sketch({
        onChange: spec.onChange,
        sizes: sizes,
        category: 'font',
        getInitialValue: spec.getInitialValue
    });
};
var makeItems = function (spec) {
    return [
        UiDomFactory.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
        makeSlider(spec),
        UiDomFactory.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
};
var sketch = function (realm, editor) {
    var spec = {
        onChange: function (value) {
            FontSizes.apply(editor, value);
        },
        getInitialValue: function ( /* slider */) {
            return FontSizes.get(editor);
        }
    };
    return ToolbarWidgets.button(realm, 'font-size', function () {
        return makeItems(spec);
    });
};
export { makeItems, sketch };
//# sourceMappingURL=FontSizeSlider.js.map
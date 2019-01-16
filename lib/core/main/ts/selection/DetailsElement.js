/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Type } from '@ephox/katamari';
var preventSummaryToggle = function (editor) {
    editor.on('click', function (e) {
        if (editor.dom.getParent(e.target, 'details')) {
            e.preventDefault();
        }
    });
};
// Forces the details element to always be open within the editor
var filterDetails = function (editor) {
    editor.parser.addNodeFilter('details', function (elms) {
        Arr.each(elms, function (details) {
            details.attr('data-mce-open', details.attr('open'));
            details.attr('open', 'open');
        });
    });
    editor.serializer.addNodeFilter('details', function (elms) {
        Arr.each(elms, function (details) {
            var open = details.attr('data-mce-open');
            details.attr('open', Type.isString(open) ? open : null);
            details.attr('data-mce-open', null);
        });
    });
};
var setup = function (editor) {
    preventSummaryToggle(editor);
    filterDetails(editor);
};
export { setup };
//# sourceMappingURL=DetailsElement.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
var selected = 'data-mce-selected';
var selectedSelector = 'td[' + selected + '],th[' + selected + ']';
// used with not selectors
var attributeSelector = '[' + selected + ']';
var firstSelected = 'data-mce-first-selected';
var firstSelectedSelector = 'td[' + firstSelected + '],th[' + firstSelected + ']';
var lastSelected = 'data-mce-last-selected';
var lastSelectedSelector = 'td[' + lastSelected + '],th[' + lastSelected + ']';
export default {
    selected: Fun.constant(selected),
    selectedSelector: Fun.constant(selectedSelector),
    attributeSelector: Fun.constant(attributeSelector),
    firstSelected: Fun.constant(firstSelected),
    firstSelectedSelector: Fun.constant(firstSelectedSelector),
    lastSelected: Fun.constant(lastSelected),
    lastSelectedSelector: Fun.constant(lastSelectedSelector)
};
//# sourceMappingURL=Ephemera.js.map
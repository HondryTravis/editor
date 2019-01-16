/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import DOMUtils from 'tinymce/core/api/dom/DOMUtils';
var getUiContainerDelta = function (ctrl) {
    var uiContainer = getUiContainer(ctrl);
    if (uiContainer && DOMUtils.DOM.getStyle(uiContainer, 'position', true) !== 'static') {
        var containerPos = DOMUtils.DOM.getPos(uiContainer);
        var dx = uiContainer.scrollLeft - containerPos.x;
        var dy = uiContainer.scrollTop - containerPos.y;
        return Option.some({
            x: dx,
            y: dy
        });
    }
    else {
        return Option.none();
    }
};
var setUiContainer = function (editor, ctrl) {
    var uiContainer = DOMUtils.DOM.select(editor.settings.ui_container)[0];
    ctrl.getRoot().uiContainer = uiContainer;
};
var getUiContainer = function (ctrl) { return ctrl ? ctrl.getRoot().uiContainer : null; };
var inheritUiContainer = function (fromCtrl, toCtrl) { return toCtrl.uiContainer = getUiContainer(fromCtrl); };
export default {
    getUiContainerDelta: getUiContainerDelta,
    setUiContainer: setUiContainer,
    getUiContainer: getUiContainer,
    inheritUiContainer: inheritUiContainer
};
//# sourceMappingURL=UiContainer.js.map
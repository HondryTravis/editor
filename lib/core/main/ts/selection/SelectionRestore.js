/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Throttler } from '@ephox/katamari';
import { PlatformDetection } from '@ephox/sand';
import DOMUtils from '../api/dom/DOMUtils';
import SelectionBookmark from './SelectionBookmark';
import { document } from '@ephox/dom-globals';
var isManualNodeChange = function (e) {
    return e.type === 'nodechange' && e.selectionChange;
};
var registerPageMouseUp = function (editor, throttledStore) {
    var mouseUpPage = function () {
        throttledStore.throttle();
    };
    DOMUtils.DOM.bind(document, 'mouseup', mouseUpPage);
    editor.on('remove', function () {
        DOMUtils.DOM.unbind(document, 'mouseup', mouseUpPage);
    });
};
var registerFocusOut = function (editor) {
    editor.on('focusout', function () {
        SelectionBookmark.store(editor);
    });
};
var registerMouseUp = function (editor, throttledStore) {
    editor.on('mouseup touchend', function (e) {
        throttledStore.throttle();
    });
};
var registerEditorEvents = function (editor, throttledStore) {
    var browser = PlatformDetection.detect().browser;
    if (browser.isIE()) {
        registerFocusOut(editor);
    }
    else {
        registerMouseUp(editor, throttledStore);
    }
    editor.on('keyup nodechange', function (e) {
        if (!isManualNodeChange(e)) {
            SelectionBookmark.store(editor);
        }
    });
};
var register = function (editor) {
    var throttledStore = Throttler.first(function () {
        SelectionBookmark.store(editor);
    }, 0);
    if (editor.inline) {
        registerPageMouseUp(editor, throttledStore);
    }
    editor.on('init', function () {
        registerEditorEvents(editor, throttledStore);
    });
    editor.on('remove', function () {
        throttledStore.cancel();
    });
};
export default {
    register: register
};
//# sourceMappingURL=SelectionRestore.js.map
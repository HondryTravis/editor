/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { ResizeWire } from '@ephox/snooker';
import { Body, Css, Element, Insert, Remove } from '@ephox/sugar';
import * as Util from '../alien/Util';
var createContainer = function () {
    var container = Element.fromTag('div');
    Css.setAll(container, {
        position: 'static',
        height: '0',
        width: '0',
        padding: '0',
        margin: '0',
        border: '0'
    });
    Insert.append(Body.body(), container);
    return container;
};
var get = function (editor, container) {
    return editor.inline ? ResizeWire.body(Util.getBody(editor), createContainer()) : ResizeWire.only(Element.fromDom(editor.getDoc()));
};
var remove = function (editor, wire) {
    if (editor.inline) {
        Remove.remove(wire.parent());
    }
};
export default {
    get: get,
    remove: remove
};
//# sourceMappingURL=TableWire.js.map
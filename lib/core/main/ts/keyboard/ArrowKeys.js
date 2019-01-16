/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { PlatformDetection } from '@ephox/sand';
import BoundarySelection from './BoundarySelection';
import * as CefNavigation from './CefNavigation';
import * as TableNavigation from './TableNavigation';
import * as ContentEndpointNavigation from './ContentEndpointNavigation';
import MatchKeys from './MatchKeys';
import VK from '../api/util/VK';
var executeKeydownOverride = function (editor, caret, evt) {
    var os = PlatformDetection.detect().os;
    MatchKeys.execute([
        { keyCode: VK.RIGHT, action: CefNavigation.moveH(editor, true) },
        { keyCode: VK.LEFT, action: CefNavigation.moveH(editor, false) },
        { keyCode: VK.UP, action: CefNavigation.moveV(editor, false) },
        { keyCode: VK.DOWN, action: CefNavigation.moveV(editor, true) },
        { keyCode: VK.RIGHT, action: TableNavigation.moveH(editor, true) },
        { keyCode: VK.LEFT, action: TableNavigation.moveH(editor, false) },
        { keyCode: VK.UP, action: TableNavigation.moveV(editor, false) },
        { keyCode: VK.DOWN, action: TableNavigation.moveV(editor, true) },
        { keyCode: VK.RIGHT, action: BoundarySelection.move(editor, caret, true) },
        { keyCode: VK.LEFT, action: BoundarySelection.move(editor, caret, false) },
        { keyCode: VK.RIGHT, ctrlKey: !os.isOSX(), altKey: os.isOSX(), action: BoundarySelection.moveNextWord(editor, caret) },
        { keyCode: VK.LEFT, ctrlKey: !os.isOSX(), altKey: os.isOSX(), action: BoundarySelection.movePrevWord(editor, caret) },
        { keyCode: VK.UP, action: ContentEndpointNavigation.moveV(editor, false) },
        { keyCode: VK.DOWN, action: ContentEndpointNavigation.moveV(editor, true) }
    ], evt).each(function (_) {
        evt.preventDefault();
    });
};
var setup = function (editor, caret) {
    editor.on('keydown', function (evt) {
        if (evt.isDefaultPrevented() === false) {
            executeKeydownOverride(editor, caret, evt);
        }
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=ArrowKeys.js.map
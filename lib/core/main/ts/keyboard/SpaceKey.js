/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import * as InsertSpace from './InsertSpace';
import MatchKeys from './MatchKeys';
import VK from '../api/util/VK';
var executeKeydownOverride = function (editor, evt) {
    MatchKeys.execute([
        { keyCode: VK.SPACEBAR, action: MatchKeys.action(InsertSpace.insertSpaceOrNbspAtSelection, editor) }
    ], evt).each(function (_) {
        evt.preventDefault();
    });
};
var setup = function (editor) {
    editor.on('keydown', function (evt) {
        if (evt.isDefaultPrevented() === false) {
            executeKeydownOverride(editor, evt);
        }
    });
};
export default {
    setup: setup
};
//# sourceMappingURL=SpaceKey.js.map
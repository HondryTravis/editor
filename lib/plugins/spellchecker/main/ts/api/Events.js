/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var fireSpellcheckStart = function (editor) {
    return editor.fire('SpellcheckStart');
};
var fireSpellcheckEnd = function (editor) {
    return editor.fire('SpellcheckEnd');
};
export default {
    fireSpellcheckStart: fireSpellcheckStart,
    fireSpellcheckEnd: fireSpellcheckEnd
};
//# sourceMappingURL=Events.js.map
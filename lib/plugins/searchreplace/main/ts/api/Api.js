/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Actions from '../core/Actions';
var get = function (editor, currentIndexState) {
    var done = function (keepEditorSelection) {
        return Actions.done(editor, currentIndexState, keepEditorSelection);
    };
    var find = function (text, matchCase, wholeWord) {
        return Actions.find(editor, currentIndexState, text, matchCase, wholeWord);
    };
    var next = function () {
        return Actions.next(editor, currentIndexState);
    };
    var prev = function () {
        return Actions.prev(editor, currentIndexState);
    };
    var replace = function (text, forward, all) {
        return Actions.replace(editor, currentIndexState, text, forward, all);
    };
    return {
        done: done,
        find: find,
        next: next,
        prev: prev,
        replace: replace
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
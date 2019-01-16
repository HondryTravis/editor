/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Actions from '../core/Actions';
import CharMap from '../core/CharMap';
var get = function (editor) {
    var getCharMap = function () {
        return CharMap.getCharMap(editor);
    };
    var insertChar = function (chr) {
        Actions.insertChar(editor, chr);
    };
    return {
        getCharMap: getCharMap,
        insertChar: insertChar
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
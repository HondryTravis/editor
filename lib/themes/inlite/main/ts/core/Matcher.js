/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
// result :: String, Rect -> Matcher.result
var result = function (id, rect) {
    return {
        id: id,
        rect: rect
    };
};
// match :: Editor, [(Editor -> Matcher.result | Null)] -> Matcher.result | Null
var match = function (editor, matchers) {
    for (var i = 0; i < matchers.length; i++) {
        var f = matchers[i];
        var result_1 = f(editor);
        if (result_1) {
            return result_1;
        }
    }
    return null;
};
export default {
    match: match,
    result: result
};
//# sourceMappingURL=Matcher.js.map
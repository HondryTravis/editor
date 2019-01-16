/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import WordCount from '../text/WordCount';
var get = function (editor) {
    var getCount = function () {
        return WordCount.getCount(editor);
    };
    return {
        getCount: getCount
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
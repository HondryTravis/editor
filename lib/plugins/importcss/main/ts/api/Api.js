/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import ImportCss from '../core/ImportCss';
var get = function (editor) {
    var convertSelectorToFormat = function (selectorText) {
        return ImportCss.defaultConvertSelectorToFormat(editor, selectorText);
    };
    return {
        convertSelectorToFormat: convertSelectorToFormat
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
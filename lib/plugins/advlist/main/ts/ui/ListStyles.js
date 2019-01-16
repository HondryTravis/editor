/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var styleValueToText = function (styleValue) {
    return styleValue.replace(/\-/g, ' ').replace(/\b\w/g, function (chr) {
        return chr.toUpperCase();
    });
};
var toMenuItems = function (styles) {
    return Tools.map(styles, function (styleValue) {
        var text = styleValueToText(styleValue);
        var data = styleValue === 'default' ? '' : styleValue;
        return { text: text, data: data };
    });
};
export default {
    toMenuItems: toMenuItems
};
//# sourceMappingURL=ListStyles.js.map
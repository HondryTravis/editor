/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var getTDTHOverallStyle = function (dom, elm, name) {
    var cells = dom.select('td,th', elm);
    var firstChildStyle;
    var checkChildren = function (firstChildStyle, elms) {
        for (var i = 0; i < elms.length; i++) {
            var currentStyle = dom.getStyle(elms[i], name);
            if (typeof firstChildStyle === 'undefined') {
                firstChildStyle = currentStyle;
            }
            if (firstChildStyle !== currentStyle) {
                return '';
            }
        }
        return firstChildStyle;
    };
    firstChildStyle = checkChildren(firstChildStyle, cells);
    return firstChildStyle;
};
var applyAlign = function (editor, elm, name) {
    if (name) {
        editor.formatter.apply('align' + name, {}, elm);
    }
};
var applyVAlign = function (editor, elm, name) {
    if (name) {
        editor.formatter.apply('valign' + name, {}, elm);
    }
};
var unApplyAlign = function (editor, elm) {
    Tools.each('left center right'.split(' '), function (name) {
        editor.formatter.remove('align' + name, {}, elm);
    });
};
var unApplyVAlign = function (editor, elm) {
    Tools.each('top middle bottom'.split(' '), function (name) {
        editor.formatter.remove('valign' + name, {}, elm);
    });
};
export default {
    applyAlign: applyAlign,
    applyVAlign: applyVAlign,
    unApplyAlign: unApplyAlign,
    unApplyVAlign: unApplyVAlign,
    getTDTHOverallStyle: getTDTHOverallStyle
};
//# sourceMappingURL=Styles.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getHtml = function (charmap) {
    var gridHtml, x, y;
    var width = Math.min(charmap.length, 25);
    var height = Math.ceil(charmap.length / width);
    gridHtml = '<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';
    for (y = 0; y < height; y++) {
        gridHtml += '<tr>';
        for (x = 0; x < width; x++) {
            var index = y * width + x;
            if (index < charmap.length) {
                var chr = charmap[index];
                var charCode = parseInt(chr[0], 10);
                var chrText = chr ? String.fromCharCode(charCode) : '&nbsp;';
                gridHtml += ('<td title="' + chr[1] + '">' +
                    '<div tabindex="-1" title="' + chr[1] + '" role="button" data-chr="' + charCode + '">' +
                    chrText +
                    '</div>' +
                    '</td>');
            }
            else {
                gridHtml += '<td />';
            }
        }
        gridHtml += '</tr>';
    }
    gridHtml += '</tbody></table>';
    return gridHtml;
};
export default {
    getHtml: getHtml
};
//# sourceMappingURL=GridHtml.js.map
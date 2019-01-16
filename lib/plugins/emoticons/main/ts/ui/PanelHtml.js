/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var emoticons = [
    ['cool', 'cry', 'embarassed', 'foot-in-mouth'],
    ['frown', 'innocent', 'kiss', 'laughing'],
    ['money-mouth', 'sealed', 'smile', 'surprised'],
    ['tongue-out', 'undecided', 'wink', 'yell']
];
var getHtml = function (pluginUrl) {
    var emoticonsHtml;
    emoticonsHtml = '<table role="list" class="mce-grid">';
    Tools.each(emoticons, function (row) {
        emoticonsHtml += '<tr>';
        Tools.each(row, function (icon) {
            var emoticonUrl = pluginUrl + '/img/smiley-' + icon + '.gif';
            emoticonsHtml += '<td><a href="#" data-mce-url="' + emoticonUrl + '" data-mce-alt="' + icon + '" tabindex="-1" ' +
                'role="option" aria-label="' + icon + '"><img src="' +
                emoticonUrl + '" style="width: 18px; height: 18px" role="presentation" /></a></td>';
        });
        emoticonsHtml += '</tr>';
    });
    emoticonsHtml += '</table>';
    return emoticonsHtml;
};
export default {
    getHtml: getHtml
};
//# sourceMappingURL=PanelHtml.js.map
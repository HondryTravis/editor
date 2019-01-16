/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var urlPatterns = [
    {
        regex: /youtu\.be\/([\w\-_\?&=.]+)/i,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$1',
        allowFullscreen: true
    },
    {
        regex: /youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$2?$4',
        allowFullscreen: true
    },
    {
        regex: /youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$1',
        allowFullscreen: true
    },
    {
        regex: /vimeo\.com\/([0-9]+)/,
        type: 'iframe', w: 425, h: 350,
        url: '//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc',
        allowFullscreen: true
    },
    {
        regex: /vimeo\.com\/(.*)\/([0-9]+)/,
        type: 'iframe', w: 425, h: 350,
        url: '//player.vimeo.com/video/$2?title=0&amp;byline=0',
        allowFullscreen: true
    },
    {
        regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
        type: 'iframe', w: 425, h: 350,
        url: '//maps.google.com/maps/ms?msid=$2&output=embed"',
        allowFullscreen: false
    },
    {
        regex: /dailymotion\.com\/video\/([^_]+)/,
        type: 'iframe', w: 480, h: 270,
        url: '//www.dailymotion.com/embed/video/$1',
        allowFullscreen: true
    },
    {
        regex: /dai\.ly\/([^_]+)/,
        type: 'iframe', w: 480, h: 270,
        url: '//www.dailymotion.com/embed/video/$1',
        allowFullscreen: true
    }
];
var getUrl = function (pattern, url) {
    var match = pattern.regex.exec(url);
    var newUrl = pattern.url;
    var _loop_1 = function (i) {
        newUrl = newUrl.replace('$' + i, function () {
            return match[i] ? match[i] : '';
        });
    };
    for (var i = 0; i < match.length; i++) {
        _loop_1(i);
    }
    return newUrl.replace(/\?$/, '');
};
var matchPattern = function (url) {
    var pattern = urlPatterns.filter(function (pattern) { return pattern.regex.test(url); });
    if (pattern.length > 0) {
        return Tools.extend({}, pattern[0], { url: getUrl(pattern[0], url) });
    }
    else {
        return null;
    }
};
export { matchPattern };
//# sourceMappingURL=UrlPatterns.js.map
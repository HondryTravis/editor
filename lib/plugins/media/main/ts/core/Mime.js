/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var guess = function (url) {
    var mimes = {
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
        mp4: 'video/mp4',
        webm: 'video/webm',
        ogg: 'video/ogg',
        swf: 'application/x-shockwave-flash'
    };
    var fileEnd = url.toLowerCase().split('.').pop();
    var mime = mimes[fileEnd];
    return mime ? mime : '';
};
export default {
    guess: guess
};
//# sourceMappingURL=Mime.js.map
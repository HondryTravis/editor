/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { FileReader, Uint8Array, Window, XMLHttpRequest } from '@ephox/sand';
import Promise from '../api/util/Promise';
import { Blob } from '@ephox/dom-globals';
/**
 * Converts blob/uris back and forth.
 *
 * @private
 * @class tinymce.file.Conversions
 */
var blobUriToBlob = function (url) {
    return new Promise(function (resolve, reject) {
        var rejectWithError = function () {
            reject('Cannot convert ' + url + ' to Blob. Resource might not exist or is inaccessible.');
        };
        try {
            var xhr = XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(this.response);
                }
                else {
                    // IE11 makes it into onload but responds with status 500
                    rejectWithError();
                }
            };
            // Chrome fires an error event instead of the exception
            // Also there seems to be no way to intercept the message that is logged to the console
            xhr.onerror = rejectWithError;
            xhr.send();
        }
        catch (ex) {
            rejectWithError();
        }
    });
};
var parseDataUri = function (uri) {
    var type, matches;
    var uriParts = decodeURIComponent(uri).split(',');
    matches = /data:([^;]+)/.exec(uriParts[0]);
    if (matches) {
        type = matches[1];
    }
    return {
        type: type,
        data: uriParts[1]
    };
};
var dataUriToBlob = function (uri) {
    return new Promise(function (resolve) {
        var str, arr, i;
        var uriParts = parseDataUri(uri);
        // Might throw error if data isn't proper base64
        try {
            str = Window.atob(uriParts.data);
        }
        catch (e) {
            resolve(new Blob([]));
            return;
        }
        arr = Uint8Array(str.length);
        for (i = 0; i < arr.length; i++) {
            arr[i] = str.charCodeAt(i);
        }
        resolve(new Blob([arr], { type: uriParts.type }));
    });
};
var uriToBlob = function (url) {
    if (url.indexOf('blob:') === 0) {
        return blobUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
        return dataUriToBlob(url);
    }
    return null;
};
var blobToDataUri = function (blob) {
    return new Promise(function (resolve) {
        var reader = FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
};
export default {
    uriToBlob: uriToBlob,
    blobToDataUri: blobToDataUri,
    parseDataUri: parseDataUri
};
//# sourceMappingURL=Conversions.js.map
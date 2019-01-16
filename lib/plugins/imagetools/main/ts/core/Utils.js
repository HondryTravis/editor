/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { FileReader, XMLHttpRequest } from '@ephox/sand';
import Promise from 'tinymce/core/api/util/Promise';
import Tools from 'tinymce/core/api/util/Tools';
var isValue = function (obj) {
    return obj !== null && obj !== undefined;
};
var traverse = function (json, path) {
    var value;
    value = path.reduce(function (result, key) {
        return isValue(result) ? result[key] : undefined;
    }, json);
    return isValue(value) ? value : null;
};
var requestUrlAsBlob = function (url, headers, withCredentials) {
    return new Promise(function (resolve) {
        var xhr;
        xhr = XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve({
                    status: xhr.status,
                    blob: this.response
                });
            }
        };
        xhr.open('GET', url, true);
        xhr.withCredentials = withCredentials;
        Tools.each(headers, function (value, key) {
            xhr.setRequestHeader(key, value);
        });
        xhr.responseType = 'blob';
        xhr.send();
    });
};
var readBlob = function (blob) {
    return new Promise(function (resolve) {
        var fr = FileReader();
        fr.onload = function (e) {
            var data = e.target;
            resolve(data.result);
        };
        fr.readAsText(blob);
    });
};
var parseJson = function (text) {
    var json;
    try {
        json = JSON.parse(text);
    }
    catch (ex) {
        // Ignore
    }
    return json;
};
export default {
    traverse: traverse,
    readBlob: readBlob,
    requestUrlAsBlob: requestUrlAsBlob,
    parseJson: parseJson
};
//# sourceMappingURL=Utils.js.map
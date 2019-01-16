/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { URL } from '@ephox/sand';
import Uuid from '../../util/Uuid';
import { Type, Fun, Arr } from '@ephox/katamari';
export default function () {
    var cache = [];
    var mimeToExt = function (mime) {
        var mimes = {
            'image/jpeg': 'jpg',
            'image/jpg': 'jpg',
            'image/gif': 'gif',
            'image/png': 'png'
        };
        return mimes[mime.toLowerCase()] || 'dat';
    };
    var create = function (o, blob, base64, filename) {
        if (Type.isString(o)) {
            var id = o;
            return toBlobInfo({
                id: id,
                name: filename,
                blob: blob,
                base64: base64
            });
        }
        else if (Type.isObject(o)) {
            return toBlobInfo(o);
        }
        else {
            throw new Error('Unknown input type');
        }
    };
    var toBlobInfo = function (o) {
        var id, name;
        if (!o.blob || !o.base64) {
            throw new Error('blob and base64 representations of the image are required for BlobInfo to be created');
        }
        id = o.id || Uuid.uuid('blobid');
        name = o.name || id;
        return {
            id: Fun.constant(id),
            name: Fun.constant(name),
            filename: Fun.constant(name + '.' + mimeToExt(o.blob.type)),
            blob: Fun.constant(o.blob),
            base64: Fun.constant(o.base64),
            blobUri: Fun.constant(o.blobUri || URL.createObjectURL(o.blob)),
            uri: Fun.constant(o.uri)
        };
    };
    var add = function (blobInfo) {
        if (!get(blobInfo.id())) {
            cache.push(blobInfo);
        }
    };
    var get = function (id) {
        return findFirst(function (cachedBlobInfo) {
            return cachedBlobInfo.id() === id;
        });
    };
    var findFirst = function (predicate) {
        return Arr.filter(cache, predicate)[0];
    };
    var getByUri = function (blobUri) {
        return findFirst(function (blobInfo) {
            return blobInfo.blobUri() === blobUri;
        });
    };
    var removeByUri = function (blobUri) {
        cache = Arr.filter(cache, function (blobInfo) {
            if (blobInfo.blobUri() === blobUri) {
                URL.revokeObjectURL(blobInfo.blobUri());
                return false;
            }
            return true;
        });
    };
    var destroy = function () {
        Arr.each(cache, function (cachedBlobInfo) {
            URL.revokeObjectURL(cachedBlobInfo.blobUri());
        });
        cache = [];
    };
    return {
        create: create,
        add: add,
        get: get,
        getByUri: getByUri,
        findFirst: findFirst,
        removeByUri: removeByUri,
        destroy: destroy
    };
}
//# sourceMappingURL=BlobCache.js.map
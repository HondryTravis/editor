/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
var prefix = 'tinymce-mobile';
var resolve = function (p) {
    return prefix + '-' + p;
};
export default {
    resolve: resolve,
    prefix: Fun.constant(prefix)
};
//# sourceMappingURL=Styles.js.map
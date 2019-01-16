/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
var evaluateUntil = function (fns, args) {
    for (var i = 0; i < fns.length; i++) {
        var result = fns[i].apply(null, args);
        if (result.isSome()) {
            return result;
        }
    }
    return Option.none();
};
export default {
    evaluateUntil: evaluateUntil
};
//# sourceMappingURL=LazyEvaluator.js.map
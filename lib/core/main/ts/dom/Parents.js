/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import { Compare, Traverse } from '@ephox/sugar';
var dropLast = function (xs) { return xs.slice(0, -1); };
var parentsUntil = function (start, root, predicate) {
    if (Compare.contains(root, start)) {
        return dropLast(Traverse.parents(start, function (elm) {
            return predicate(elm) || Compare.eq(elm, root);
        }));
    }
    else {
        return [];
    }
};
var parents = function (start, root) {
    return parentsUntil(start, root, Fun.constant(false));
};
var parentsAndSelf = function (start, root) {
    return [start].concat(parents(start, root));
};
export default {
    parentsUntil: parentsUntil,
    parents: parents,
    parentsAndSelf: parentsAndSelf
};
//# sourceMappingURL=Parents.js.map
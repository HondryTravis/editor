/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Traverse } from '@ephox/sugar';
import { isList } from './ListType';
var hasFirstChildList = function (li) {
    return Traverse.firstChild(li).map(isList).getOr(false);
};
var hasLastChildList = function (li) {
    return Traverse.lastChild(li).map(isList).getOr(false);
};
export { hasFirstChildList, hasLastChildList };
//# sourceMappingURL=Util.js.map
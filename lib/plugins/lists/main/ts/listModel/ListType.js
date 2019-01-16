/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Compare, Node } from '@ephox/sugar';
import { Option } from '@ephox/katamari';
export var ListType;
(function (ListType) {
    ListType["OL"] = "OL";
    ListType["UL"] = "UL";
    ListType["DL"] = "DL";
})(ListType || (ListType = {}));
var getListType = function (list) {
    switch (Node.name(list)) {
        case 'ol':
            return Option.some(ListType.OL);
        case 'ul':
            return Option.some(ListType.UL);
        case 'dl':
            return Option.some(ListType.DL);
        default:
            return Option.none();
    }
};
var isList = function (el) {
    return Compare.is(el, 'OL,UL,DL');
};
export { isList, getListType };
//# sourceMappingURL=ListType.js.map
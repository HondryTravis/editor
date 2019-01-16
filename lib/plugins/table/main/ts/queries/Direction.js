/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun } from '@ephox/katamari';
import { Direction } from '@ephox/sugar';
var ltr = {
    isRtl: Fun.constant(false)
};
var rtl = {
    isRtl: Fun.constant(true)
};
// Get the directionality from the position in the content
var directionAt = function (element) {
    var dir = Direction.getDirection(element);
    return dir === 'rtl' ? rtl : ltr;
};
export default {
    directionAt: directionAt
};
//# sourceMappingURL=Direction.js.map
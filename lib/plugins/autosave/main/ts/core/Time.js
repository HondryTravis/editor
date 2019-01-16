/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var parse = function (timeString, defaultTime) {
    var multiples = {
        s: 1000,
        m: 60000
    };
    var toParse = (timeString || defaultTime);
    var parsedTime = /^(\d+)([ms]?)$/.exec('' + toParse);
    return (parsedTime[2] ? multiples[parsedTime[2]] : 1) * parseInt(toParse, 10);
};
export { parse };
//# sourceMappingURL=Time.js.map
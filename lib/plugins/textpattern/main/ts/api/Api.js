/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { createPatternSet } from './Pattern';
var get = function (patternsState) {
    var setPatterns = function (newPatterns) {
        patternsState.set(createPatternSet(newPatterns));
    };
    var getPatterns = function () {
        return patternsState.get().inlinePatterns.concat(patternsState.get().blockPatterns, patternsState.get().replacementPatterns);
    };
    return {
        setPatterns: setPatterns,
        getPatterns: getPatterns
    };
};
export default {
    get: get
};
//# sourceMappingURL=Api.js.map
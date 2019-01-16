/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
var create = function () {
    var annotations = {};
    var register = function (name, settings) {
        annotations[name] = {
            name: name,
            settings: settings
        };
    };
    var lookup = function (name) {
        return annotations.hasOwnProperty(name) ? Option.from(annotations[name]).map(function (a) { return a.settings; }) : Option.none();
    };
    return {
        register: register,
        lookup: lookup
    };
};
export { create };
//# sourceMappingURL=AnnotationsRegistry.js.map
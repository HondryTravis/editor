/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option, Arr } from '@ephox/katamari';
import * as Markings from './Markings';
var setup = function (editor, registry) {
    var identifyParserNode = function (span) {
        var optAnnotation = Option.from(span.attributes.map[Markings.dataAnnotation()]);
        return optAnnotation.bind(registry.lookup);
    };
    editor.on('init', function () {
        editor.serializer.addNodeFilter('span', function (spans) {
            Arr.each(spans, function (span) {
                identifyParserNode(span).each(function (settings) {
                    if (settings.persistent === false) {
                        span.unwrap();
                    }
                });
            });
        });
    });
};
export { setup };
//# sourceMappingURL=AnnotationFilter.js.map
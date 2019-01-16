/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { createPatternSet } from './Pattern';
import { Obj } from '@ephox/katamari';
var defaultPatterns = [
    { start: '*', end: '*', format: 'italic' },
    { start: '**', end: '**', format: 'bold' },
    { start: '***', end: '***', format: ['bold', 'italic'] },
    { start: '#', format: 'h1' },
    { start: '##', format: 'h2' },
    { start: '###', format: 'h3' },
    { start: '####', format: 'h4' },
    { start: '#####', format: 'h5' },
    { start: '######', format: 'h6' },
    { start: '1. ', cmd: 'InsertOrderedList' },
    { start: '* ', cmd: 'InsertUnorderedList' },
    { start: '- ', cmd: 'InsertUnorderedList' }
];
var getPatternSet = function (editorSettings) {
    var patterns = Obj.get(editorSettings, 'textpattern_patterns').getOr(defaultPatterns);
    return createPatternSet(patterns);
};
export { getPatternSet, };
//# sourceMappingURL=Settings.js.map
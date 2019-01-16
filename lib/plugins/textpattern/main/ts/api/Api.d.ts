/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Cell } from '@ephox/katamari';
import { PatternSet, Pattern } from './Pattern';
declare const _default: {
    get: (patternsState: Cell<PatternSet>) => {
        setPatterns: (newPatterns: Pattern[]) => void;
        getPatterns: () => Pattern[];
    };
};
export default _default;

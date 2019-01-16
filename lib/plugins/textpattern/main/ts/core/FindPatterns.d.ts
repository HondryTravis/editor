/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { InlinePattern, Pattern, ReplacementPattern } from '../api/Pattern';
import { Range } from '@ephox/dom-globals';
import { Option } from '@ephox/katamari';
declare const findPattern: (patterns: Pattern[], text: string) => Pattern;
declare const findEndPattern: (patterns: any, text: any, offset: any, delta: any) => any;
declare const findInlinePattern: (patterns: InlinePattern[], rng: Range, space: boolean) => {
    pattern: any;
    startOffset: number;
    endOffset: number;
};
interface PatternMatch<T extends Pattern> {
    pattern: T;
    startOffset: number;
}
export declare type ReplacementMatch = PatternMatch<ReplacementPattern>;
declare const findReplacementPattern: (patterns: ReplacementPattern[], startSearch: number, text: string) => Option<PatternMatch<ReplacementPattern>>;
export { findPattern, findEndPattern, findInlinePattern, findReplacementPattern };

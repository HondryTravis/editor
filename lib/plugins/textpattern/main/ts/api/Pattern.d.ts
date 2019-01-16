/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface InlinePattern {
    start: string;
    end: string;
    format: string | string[];
}
export interface BlockPattern {
    start: string;
    format?: string | string[];
    cmd?: string;
}
export interface ReplacementPattern {
    start: string;
    replacement: string;
}
export declare type Pattern = InlinePattern | BlockPattern | ReplacementPattern;
export interface PatternSet {
    inlinePatterns: InlinePattern[];
    blockPatterns: BlockPattern[];
    replacementPatterns: ReplacementPattern[];
}
declare const createPatternSet: (patterns: Pattern[]) => PatternSet;
export { createPatternSet };

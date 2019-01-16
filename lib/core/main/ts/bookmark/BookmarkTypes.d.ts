/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Range } from '@ephox/dom-globals';
export interface StringPathBookmark {
    start: string;
    end?: string;
}
export interface RangeBookmark {
    rng: Range;
}
export interface IdBookmark {
    id: string;
    keep?: boolean;
}
export interface IndexBookmark {
    name: string;
    index: number;
}
export interface PathBookmark {
    start: number[];
    end?: number[];
}
export declare type Bookmark = StringPathBookmark | RangeBookmark | IdBookmark | IndexBookmark | PathBookmark;
declare const isStringPathBookmark: (bookmark: Bookmark) => bookmark is StringPathBookmark;
declare const isRangeBookmark: (bookmark: Bookmark) => bookmark is RangeBookmark;
declare const isIdBookmark: (bookmark: Bookmark) => bookmark is IdBookmark;
declare const isIndexBookmark: (bookmark: Bookmark) => bookmark is IndexBookmark;
declare const isPathBookmark: (bookmark: Bookmark) => bookmark is PathBookmark;
export { isStringPathBookmark, isRangeBookmark, isIdBookmark, isIndexBookmark, isPathBookmark };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { HTMLElement, Range } from '@ephox/dom-globals';
export declare type Match = Record<string, string>;
export interface DomTextMatcher {
    text: string;
    matches: string[];
    each: (cb: Function) => DomTextMatcher;
    filter: (cb: Function) => DomTextMatcher;
    reset: () => DomTextMatcher;
    matchFromElement: (element: HTMLElement) => Match;
    elementFromMatch: (match: Match) => HTMLElement;
    find: (regex: RegExp, data: Record<string, string>) => DomTextMatcher;
    add: (start: number, length: number, data: Record<string, string>) => DomTextMatcher;
    wrap: (cb: Function) => DomTextMatcher;
    unwrap: (match?: Match) => DomTextMatcher;
    replace: (match: Match, text: string) => Range;
    rangeFromMatch: (match: Match) => Range;
    indexOf: (match: Match) => number;
}
export declare const DomTextMatcher: (node: any, editor: any) => DomTextMatcher;

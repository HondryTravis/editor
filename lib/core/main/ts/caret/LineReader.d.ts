/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { CaretPosition } from './CaretPosition';
import { Option } from '@ephox/katamari';
import { HTMLElement } from '@ephox/dom-globals';
export declare enum BreakType {
    Br = 0,
    Block = 1,
    Wrap = 2,
    Eol = 3
}
export interface LineInfo {
    positions: CaretPosition[];
    breakType: BreakType;
    breakAt: Option<CaretPosition>;
}
declare type LineInfoFinder = (scope: HTMLElement, start: CaretPosition) => LineInfo;
declare type CaretPositionsFinder = (scope: HTMLElement, start: CaretPosition) => CaretPosition[];
declare const findClosestHorizontalPositionFromPoint: (positions: CaretPosition[], x: number) => Option<CaretPosition>;
declare const findClosestHorizontalPosition: (positions: CaretPosition[], pos: CaretPosition) => Option<CaretPosition>;
declare const getPositionsUntilPreviousLine: LineInfoFinder;
declare const getPositionsUntilNextLine: LineInfoFinder;
declare const isAtFirstLine: (scope: HTMLElement, pos: CaretPosition) => boolean;
declare const isAtLastLine: (scope: HTMLElement, pos: CaretPosition) => boolean;
declare const getPositionsAbove: CaretPositionsFinder;
declare const getPositionsBelow: CaretPositionsFinder;
declare const getFirstLinePositions: (scope: HTMLElement) => CaretPosition[];
declare const getLastLinePositions: (scope: HTMLElement) => CaretPosition[];
declare const getClosestPositionAbove: (scope: HTMLElement, pos: CaretPosition) => Option<CaretPosition>;
declare const getClosestPositionBelow: (scope: HTMLElement, pos: CaretPosition) => Option<CaretPosition>;
export { getPositionsUntilPreviousLine, getPositionsUntilNextLine, isAtFirstLine, isAtLastLine, getPositionsAbove, getPositionsBelow, findClosestHorizontalPosition, findClosestHorizontalPositionFromPoint, getFirstLinePositions, getLastLinePositions, getClosestPositionAbove, getClosestPositionBelow };

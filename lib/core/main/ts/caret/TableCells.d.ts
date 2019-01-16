/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { CaretPosition } from 'tinymce/core/caret/CaretPosition';
import { HTMLElement } from '@ephox/dom-globals';
declare const getClosestCellAbove: (table: HTMLElement, x: number, y: number) => Option<HTMLElement>;
declare const getClosestCellBelow: (table: HTMLElement, x: number, y: number) => Option<HTMLElement>;
declare const findClosestPositionInAboveCell: (table: HTMLElement, pos: CaretPosition) => Option<CaretPosition>;
declare const findClosestPositionInBelowCell: (table: HTMLElement, pos: CaretPosition) => Option<CaretPosition>;
export { getClosestCellAbove, getClosestCellBelow, findClosestPositionInAboveCell, findClosestPositionInBelowCell };

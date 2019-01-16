/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Option } from '@ephox/katamari';
export interface StringMap {
    [key: string]: string;
}
declare type ColorPickerCallback = (editor: Editor, pickValue: (value: string) => void, value: string) => void;
declare const getDefaultAttributes: (editor: Editor) => StringMap;
declare const getDefaultStyles: (editor: Editor) => StringMap;
declare const hasTableResizeBars: (editor: Editor) => boolean;
declare const hasTabNavigation: (editor: Editor) => boolean;
declare const hasAdvancedCellTab: (editor: Editor) => boolean;
declare const hasAdvancedRowTab: (editor: Editor) => boolean;
declare const hasAdvancedTableTab: (editor: Editor) => boolean;
declare const hasAppearanceOptions: (editor: Editor) => boolean;
declare const hasTableGrid: (editor: Editor) => boolean;
declare const shouldStyleWithCss: (editor: Editor) => boolean;
declare const getCellClassList: (editor: Editor) => {
    title: string;
    value: string;
}[];
declare const getRowClassList: (editor: Editor) => {
    title: string;
    value: string;
}[];
declare const getTableClassList: (editor: Editor) => {
    title: string;
    value: string;
}[];
declare const getColorPickerCallback: (editor: Editor) => ColorPickerCallback;
declare const isPercentagesForced: (editor: Editor) => boolean;
declare const isPixelsForced: (editor: Editor) => boolean;
declare const getCloneElements: (editor: Editor) => Option<string[]>;
declare const hasObjectResizing: (editor: Editor) => boolean;
declare const getToolbar: (editor: Editor) => string[];
export { getDefaultAttributes, getDefaultStyles, hasTableResizeBars, hasTabNavigation, hasAdvancedCellTab, hasAdvancedRowTab, hasAdvancedTableTab, hasAppearanceOptions, hasTableGrid, shouldStyleWithCss, getCellClassList, getRowClassList, getTableClassList, getColorPickerCallback, getCloneElements, hasObjectResizing, isPercentagesForced, isPixelsForced, getToolbar };

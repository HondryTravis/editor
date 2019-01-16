/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const isBrandingEnabled: (editor: any) => boolean;
declare const hasMenubar: (editor: any) => boolean;
declare const getMenubar: (editor: any) => any;
declare const hasStatusbar: (editor: any) => boolean;
declare const getToolbarSize: (editor: any) => string;
declare const isReadOnly: (editor: any) => boolean;
declare const getFixedToolbarContainer: (editor: any) => any;
declare const getInlineToolbarPositionHandler: (editor: any) => any;
declare const getMenu: (editor: any) => any;
declare const getRemovedMenuItems: (editor: any) => any;
declare const getMinWidth: (editor: any) => number;
declare const getMinHeight: (editor: any) => number;
declare const getMaxWidth: (editor: any) => number;
declare const getMaxHeight: (editor: any) => number;
declare const isSkinDisabled: (editor: any) => boolean;
declare const isInline: (editor: any) => boolean;
declare const getResize: (editor: any) => string;
declare const getSkinUrl: (editor: any) => string;
declare const getToolbars: (editor: any) => any[];
export { isBrandingEnabled, hasMenubar, getMenubar, hasStatusbar, getToolbarSize, getResize, isReadOnly, getFixedToolbarContainer, getInlineToolbarPositionHandler, getMenu, getRemovedMenuItems, getMinWidth, getMinHeight, getMaxWidth, getMaxHeight, getSkinUrl, isSkinDisabled, isInline, getToolbars };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const isHeading: (node: any) => boolean;
declare const isBlock: (node: any) => boolean;
declare const isInline: (node: any) => boolean;
declare const isBr: (node: any) => boolean;
declare const isTextBlock: (node: any) => boolean;
declare const isList: (node: any) => boolean;
declare const isListItem: (node: any) => boolean;
declare const isVoid: (node: any) => boolean;
declare const isTableSection: (node: any) => boolean;
declare const isTableCell: (node: any) => boolean;
declare const isWsPreserveElement: (node: any) => boolean;
export { isBlock, isInline, isHeading, isTextBlock, isList, isListItem, isVoid, isTableSection, isTableCell, isBr, isWsPreserveElement };

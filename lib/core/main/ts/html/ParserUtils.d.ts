/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const paddEmptyNode: (settings: any, args: any, blockElements: any, node: any) => void;
declare const isPaddedWithNbsp: (node: any) => boolean;
declare const hasOnlyChild: (node: any, name: any) => boolean;
declare const isEmpty: (schema: any, nonEmptyElements: any, whitespaceElements: any, node: any) => any;
declare const isLineBreakNode: (node: any, blockElements: any) => any;
export { paddEmptyNode, isPaddedWithNbsp, hasOnlyChild, isEmpty, isLineBreakNode };

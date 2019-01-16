/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Node, Text } from '@ephox/dom-globals';
declare const _default: {
    isTextNode: (node: Node) => node is Text;
    isListNode: (node: any) => boolean;
    isOlUlNode: (node: any) => boolean;
    isDlItemNode: (node: any) => boolean;
    isListItemNode: (node: any) => boolean;
    isTableCellNode: (node: any) => boolean;
    isBr: (node: any) => boolean;
    isFirstChild: (node: any) => boolean;
    isLastChild: (node: any) => boolean;
    isTextBlock: (editor: any, node: any) => boolean;
    isBlock: (node: any, blockElements: any) => boolean;
    isBogusBr: (dom: any, node: any) => boolean;
    isEmpty: (dom: any, elm: any, keepBookmarks?: any) => any;
    isChildOfBody: (dom: any, elm: any) => any;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Selection } from '../api/dom/Selection';
import { DOMUtils } from 'tinymce/core/api/dom/DOMUtils';
import { Range } from '@ephox/dom-globals';
declare const _default: {
    isInlineBlock: (node: any) => boolean;
    moveStart: (dom: DOMUtils, selection: Selection, rng: Range) => void;
    getNonWhiteSpaceSibling: (node: any, next?: any, inc?: any) => any;
    isTextBlock: (editor: any, name: any) => boolean;
    isValid: (ed: any, parent: any, child: any) => any;
    isWhiteSpaceNode: (node: any) => boolean;
    replaceVars: (value: any, vars: any) => any;
    isEq: (str1: any, str2: any) => boolean;
    normalizeStyleValue: (dom: any, value: any, name: any) => string;
    getStyle: (dom: any, node: any, name: any) => string;
    getTextDecoration: (dom: any, node: any) => any;
    getParents: (dom: any, node: any, selector?: any) => any;
};
export default _default;

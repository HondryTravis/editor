/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Range } from '@ephox/dom-globals';
declare const _default: {
    isListFragment: (schema: any, fragment: any) => boolean;
    insertAtCaret: (serializer: any, dom: any, rng: any, fragment: any) => Range;
    isParentBlockLi: (dom: any, node: any) => boolean;
    trimListItems: (elms: any) => any;
    listItems: (elm: any) => any[];
};
export default _default;

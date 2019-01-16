/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
declare const _default: {
    moveToCaretPosition: (editor: any, root: any) => void;
    getEditableRoot: (dom: any, node: any) => any;
    getParentBlock: (editor: any) => Option<any>;
    getParentBlockName: (editor: any) => any;
    isListItemParentBlock: (editor: any) => boolean;
};
export default _default;

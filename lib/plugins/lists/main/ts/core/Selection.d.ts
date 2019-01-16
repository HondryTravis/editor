/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Node } from '@ephox/dom-globals';
import { Editor } from 'tinymce/core/api/Editor';
declare const _default: {
    isList: (editor: Editor) => boolean;
    getParentList: (editor: any) => any;
    getSelectedSubLists: (editor: any) => any[];
    getSelectedListItems: (editor: any) => any[];
    getClosestListRootElm: (editor: any, elm: any) => any;
    getSelectedDlItems: (editor: Editor) => Node[];
    getSelectedListRoots: (editor: Editor) => Node[];
};
export default _default;

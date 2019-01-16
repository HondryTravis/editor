/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option, Cell } from '@ephox/katamari';
import { Editor } from 'tinymce/core/api/Editor';
import { TableActions } from 'tinymce/plugins/table/actions/TableActions';
import { Selections } from 'tinymce/plugins/table/selection/Selections';
declare const _default: {
    registerCommands: (editor: Editor, actions: TableActions, cellSelection: any, selections: Selections, clipboardRows: Cell<Option<any>>) => void;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { TableActions } from 'tinymce/plugins/table/actions/TableActions';
import { KeyboardEvent } from '@ephox/dom-globals';
declare const _default: {
    handle: (event: KeyboardEvent, editor: Editor, actions: TableActions, lazyWire: any) => void;
};
export default _default;

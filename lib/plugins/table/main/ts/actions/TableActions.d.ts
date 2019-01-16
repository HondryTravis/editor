/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
export interface TableActions {
    deleteRow: (table: any, target: any) => any;
    deleteColumn: (table: any, target: any) => any;
    insertRowsBefore: (table: any, target: any) => any;
    insertRowsAfter: (table: any, target: any) => any;
    insertColumnsBefore: (table: any, target: any) => any;
    insertColumnsAfter: (table: any, target: any) => any;
    mergeCells: (table: any, target: any) => any;
    unmergeCells: (table: any, target: any) => any;
    pasteRowsBefore: (table: any, target: any) => any;
    pasteRowsAfter: (table: any, target: any) => any;
    pasteCells: (table: any, target: any) => any;
}
export declare const TableActions: (editor: Editor, lazyWire: any) => {
    deleteRow: (table: any, target: any) => any;
    deleteColumn: (table: any, target: any) => any;
    insertRowsBefore: (table: any, target: any) => any;
    insertRowsAfter: (table: any, target: any) => any;
    insertColumnsBefore: (table: any, target: any) => any;
    insertColumnsAfter: (table: any, target: any) => any;
    mergeCells: (table: any, target: any) => any;
    unmergeCells: (table: any, target: any) => any;
    pasteRowsBefore: (table: any, target: any) => any;
    pasteRowsAfter: (table: any, target: any) => any;
    pasteCells: (table: any, target: any) => any;
};

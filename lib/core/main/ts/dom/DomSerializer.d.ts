/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Schema from '../api/html/Schema';
import { Editor } from 'tinymce/core/api/Editor';
export default function (settings: any, editor: Editor): {
    schema: Schema;
    addNodeFilter: any;
    addAttributeFilter: any;
    serialize: (node: any, parserArgs?: any) => any;
    addRules(rules: any): void;
    setRules(rules: any): void;
    addTempAttr: (name: any) => void;
    getTempAttrs(): string[];
};

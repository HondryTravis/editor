/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { Editor } from 'tinymce/core/api/Editor';
import { IndentValue } from './Indentation';
declare const listsIndentation: (editor: Editor, lists: Element[], indentation: IndentValue) => void;
export { listsIndentation };

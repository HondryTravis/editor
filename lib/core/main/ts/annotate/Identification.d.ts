/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import { Editor } from 'tinymce/core/api/Editor';
declare const identify: (editor: Editor, annotationName: Option<string>) => Option<{
    uid: string;
    name: string;
    elements: any[];
}>;
declare const isAnnotation: (elem: any) => boolean;
declare const findAll: (editor: Editor, name: string) => Record<string, Element[]>;
export { identify, isAnnotation, findAll };

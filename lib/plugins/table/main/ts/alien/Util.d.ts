/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { Editor } from 'tinymce/core/api/Editor';
import { HTMLElement } from '@ephox/dom-globals';
declare const getBody: (editor: Editor) => Element;
declare const getPixelWidth: (elm: HTMLElement) => number;
declare const getPixelHeight: (elm: HTMLElement) => number;
declare const getIsRoot: (editor: Editor) => (element: any) => boolean;
declare const removePxSuffix: (size: string) => string;
declare const addSizeSuffix: (size: string) => string;
declare const removeDataStyle: (table: any) => void;
export { getBody, getIsRoot, addSizeSuffix, removePxSuffix, getPixelWidth, getPixelHeight, removeDataStyle };

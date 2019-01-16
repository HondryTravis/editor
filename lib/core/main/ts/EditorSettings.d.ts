/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Editor } from 'tinymce/core/api/Editor';
export interface ParamTypeMap {
    'hash': Record<string, string>;
    'string': string;
    'number': number;
    'boolean': boolean;
    'string[]': string[];
    'array': any[];
}
declare const combineSettings: (isTouchDevice: any, defaultSettings: any, defaultOverrideSettings: any, settings: any) => any;
declare const getEditorSettings: (editor: any, id: any, documentBaseUrl: any, defaultOverrideSettings: any, settings: any) => any;
declare const get: (editor: any, name: any) => Option<any>;
declare const getString: (editor: any, name: string) => Option<any>;
declare const getParam: (editor: Editor, name: string, defaultVal?: any, type?: string) => any;
export { getEditorSettings, get, getString, getParam, combineSettings };

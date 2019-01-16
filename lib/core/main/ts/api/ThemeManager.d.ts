/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { UrlObject, AddOnManager } from './AddOnManager';
import { Editor } from 'tinymce/core/api/Editor';
export interface ThemeManager extends AddOnManager {
    add: (id: string, addOn: (editor: Editor, url: string) => any, dependencies?: any) => (editor: Editor, url: string) => any;
    createUrl: (baseUrl: UrlObject, dep: string | UrlObject) => UrlObject;
}
declare const _default: ThemeManager;
export default _default;

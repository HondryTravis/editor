/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
export interface UrlObject {
    prefix: string;
    resource: string;
    suffix: string;
}
export interface AddOnManager {
    items: any[];
    urls: Record<string, string>;
    lookup: {};
    _listeners: any[];
    get: (name: string) => any;
    dependencies: (name: string) => any;
    requireLangPack: (name: string, languages: string) => void;
    add: (id: string, addOn: (editor: Editor, url: string) => any, dependencies?: any) => (editor: Editor, url: string) => any;
    remove: (name: string) => void;
    createUrl: (baseUrl: UrlObject, dep: string | UrlObject) => UrlObject;
    addComponents: (pluginName: string, scripts: string[]) => void;
    load: (name: string, addOnUrl: string | UrlObject, success?: any, scope?: any, failure?: any) => void;
    waitFor: (name: string, callback: (...x: any[]) => any) => void;
}
export declare function AddOnManager(): AddOnManager;
export declare namespace AddOnManager {
    let language: any;
    let languageLoad: any;
    let baseURL: any;
    const PluginManager: AddOnManager;
    const ThemeManager: AddOnManager;
}

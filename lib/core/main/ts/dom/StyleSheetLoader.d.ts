/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * This class handles loading of external stylesheets and fires events when these are loaded.
 *
 * @class tinymce.dom.StyleSheetLoader
 * @private
 */
export interface StyleSheetLoader {
    load: (url: string, loadedCallback: Function, errorCallback?: Function) => void;
    loadAll: (urls: string[], success: Function, failure: Function) => void;
}
export interface StyleSheetLoaderSettings {
    maxLoadTime: number;
    contentCssCors: boolean;
}
export declare function StyleSheetLoader(document: any, settings?: Partial<StyleSheetLoaderSettings>): StyleSheetLoader;

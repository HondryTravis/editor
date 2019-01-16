/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
declare type ProcessFn = (plugin: any, args: any) => void;
declare const _default: {
    shouldPlainTextInform: (editor: Editor) => boolean;
    shouldBlockDrop: (editor: Editor) => boolean;
    shouldPasteDataImages: (editor: Editor) => boolean;
    shouldFilterDrop: (editor: Editor) => boolean;
    getPreProcess: (editor: Editor) => ProcessFn;
    getPostProcess: (editor: Editor) => ProcessFn;
    getWebkitStyles: (editor: Editor) => string;
    shouldRemoveWebKitStyles: (editor: Editor) => boolean;
    shouldMergeFormats: (editor: Editor) => boolean;
    isSmartPasteEnabled: (editor: Editor) => boolean;
    isPasteAsTextEnabled: (editor: Editor) => boolean;
    getRetainStyleProps: (editor: Editor) => string;
    getWordValidElements: (editor: Editor) => string;
    shouldConvertWordFakeLists: (editor: Editor) => boolean;
    shouldUseDefaultFilters: (editor: Editor) => boolean;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
/**
 * This class parses word HTML into proper TinyMCE markup.
 *
 * @class tinymce.pasteplugin.WordFilter
 * @private
 */
/**
 * Checks if the specified content is from any of the following sources: MS Word/Office 365/Google docs.
 */
declare function isWordContent(content: any): boolean;
declare const _default: {
    preProcess: (editor: Editor, content: any) => any;
    isWordContent: typeof isWordContent;
};
export default _default;

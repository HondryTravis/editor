/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
declare const getToolbarItems: (editor: Editor) => string;
declare const getProxyUrl: (editor: Editor) => string;
declare const getCorsHosts: (editor: Editor) => string[];
declare const getCredentialsHosts: (editor: Editor) => string[];
declare const getApiKey: (editor: Editor) => string;
declare const getUploadTimeout: (editor: Editor) => number;
declare const shouldReuseFilename: (editor: Editor) => boolean;
export { getToolbarItems, getProxyUrl, getCorsHosts, getCredentialsHosts, getApiKey, getUploadTimeout, shouldReuseFilename };

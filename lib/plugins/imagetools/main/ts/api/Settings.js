/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
var getToolbarItems = function (editor) {
    return editor.getParam('imagetools_toolbar', 'rotateleft rotateright | flipv fliph | crop editimage imageoptions');
};
var getProxyUrl = function (editor) { return editor.getParam('imagetools_proxy'); };
var getCorsHosts = function (editor) { return editor.getParam('imagetools_cors_hosts', [], 'string[]'); };
var getCredentialsHosts = function (editor) { return editor.getParam('imagetools_credentials_hosts', [], 'string[]'); };
var getApiKey = function (editor) {
    return editor.getParam('api_key', editor.getParam('imagetools_api_key', '', 'string'), 'string');
};
var getUploadTimeout = function (editor) { return editor.getParam('images_upload_timeout', 30000, 'number'); };
var shouldReuseFilename = function (editor) { return editor.getParam('images_reuse_filename', false, 'boolean'); };
export { getToolbarItems, getProxyUrl, getCorsHosts, getCredentialsHosts, getApiKey, getUploadTimeout, shouldReuseFilename };
//# sourceMappingURL=Settings.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { AddOnManager } from './api/AddOnManager';
import { window } from '@ephox/dom-globals';
/**
 * Various error reporting helper functions.
 *
 * @class tinymce.ErrorReporter
 * @private
 */
var PluginManager = AddOnManager.PluginManager;
var resolvePluginName = function (targetUrl, suffix) {
    for (var name in PluginManager.urls) {
        var matchUrl = PluginManager.urls[name] + '/plugin' + suffix + '.js';
        if (matchUrl === targetUrl) {
            return name;
        }
    }
    return null;
};
var pluginUrlToMessage = function (editor, url) {
    var plugin = resolvePluginName(url, editor.suffix);
    return plugin ?
        'Failed to load plugin: ' + plugin + ' from url ' + url :
        'Failed to load plugin url: ' + url;
};
var displayNotification = function (editor, message) {
    editor.notificationManager.open({
        type: 'error',
        text: message
    });
};
var displayError = function (editor, message) {
    if (editor._skinLoaded) {
        displayNotification(editor, message);
    }
    else {
        editor.on('SkinLoaded', function () {
            displayNotification(editor, message);
        });
    }
};
var uploadError = function (editor, message) {
    displayError(editor, 'Failed to upload image: ' + message);
};
var pluginLoadError = function (editor, url) {
    displayError(editor, pluginUrlToMessage(editor, url));
};
var initError = function (message) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        x[_i - 1] = arguments[_i];
    }
    var console = window.console;
    if (console) { // Skip test env
        if (console.error) { // tslint:disable-line:no-console
            console.error.apply(console, arguments); // tslint:disable-line:no-console
        }
        else {
            console.log.apply(console, arguments); // tslint:disable-line:no-console
        }
    }
};
export default {
    pluginLoadError: pluginLoadError,
    uploadError: uploadError,
    displayError: displayError,
    initError: initError
};
//# sourceMappingURL=ErrorReporter.js.map
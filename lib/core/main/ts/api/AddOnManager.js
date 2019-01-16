/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
import ScriptLoader from './dom/ScriptLoader';
import Tools from './util/Tools';
/**
 * This class handles the loading of themes/plugins or other add-ons and their language packs.
 *
 * @class tinymce.AddOnManager
 */
/**
 * TinyMCE theme class.
 *
 * @class tinymce.Theme
 */
/**
 * This method is responsible for rendering/generating the overall user interface with toolbars, buttons, iframe containers etc.
 *
 * @method renderUI
 * @param {Object} obj Object parameter containing the targetNode DOM node that will be replaced visually with an editor instance.
 * @return {Object} an object with items like iframeContainer, editorContainer, sizeContainer, deltaWidth, deltaHeight.
 */
/**
 * Plugin base class, this is a pseudo class that describes how a plugin is to be created for TinyMCE. The methods below are all optional.
 *
 * @class tinymce.Plugin
 * @example
 * tinymce.PluginManager.add('example', function(editor, url) {
 *     // Add a button that opens a window
 *     editor.addButton('example', {
 *         text: 'My button',
 *         icon: false,
 *         onclick: function() {
 *             // Open window
 *             editor.windowManager.open({
 *                 title: 'Example plugin',
 *                 body: [
 *                     {type: 'textbox', name: 'title', label: 'Title'}
 *                 ],
 *                 onsubmit: function(e) {
 *                     // Insert content when the window form is submitted
 *                     editor.insertContent('Title: ' + e.data.title);
 *                 }
 *             });
 *         }
 *     });
 *
 *     // Adds a menu item to the tools menu
 *     editor.addMenuItem('example', {
 *         text: 'Example plugin',
 *         context: 'tools',
 *         onclick: function() {
 *             // Open window with a specific url
 *             editor.windowManager.open({
 *                 title: 'TinyMCE site',
 *                 url: 'http://www.tinymce.com',
 *                 width: 800,
 *                 height: 600,
 *                 buttons: [{
 *                     text: 'Close',
 *                     onclick: 'close'
 *                 }]
 *             });
 *         }
 *     });
 * });
 */
var each = Tools.each;
export function AddOnManager() {
    var _this = this;
    var items = [];
    var urls = {};
    var lookup = {};
    var _listeners = [];
    var get = function (name) {
        if (lookup[name]) {
            return lookup[name].instance;
        }
        return undefined;
    };
    var dependencies = function (name) {
        var result;
        if (lookup[name]) {
            result = lookup[name].dependencies;
        }
        return result || [];
    };
    var requireLangPack = function (name, languages) {
        var language = AddOnManager.language;
        if (language && AddOnManager.languageLoad !== false) {
            if (languages) {
                languages = ',' + languages + ',';
                // Load short form sv.js or long form sv_SE.js
                if (languages.indexOf(',' + language.substr(0, 2) + ',') !== -1) {
                    language = language.substr(0, 2);
                }
                else if (languages.indexOf(',' + language + ',') === -1) {
                    return;
                }
            }
            ScriptLoader.ScriptLoader.add(urls[name] + '/langs/' + language + '.js');
        }
    };
    var add = function (id, addOn, dependencies) {
        items.push(addOn);
        lookup[id] = { instance: addOn, dependencies: dependencies };
        var result = Arr.partition(_listeners, function (listener) {
            return listener.name === id;
        });
        _listeners = result.fail;
        each(result.pass, function (listener) {
            listener.callback();
        });
        return addOn;
    };
    var remove = function (name) {
        delete urls[name];
        delete lookup[name];
    };
    var createUrl = function (baseUrl, dep) {
        if (typeof dep === 'object') {
            return dep;
        }
        return typeof baseUrl === 'string' ?
            { prefix: '', resource: dep, suffix: '' } :
            { prefix: baseUrl.prefix, resource: dep, suffix: baseUrl.suffix };
    };
    var addComponents = function (pluginName, scripts) {
        var pluginUrl = _this.urls[pluginName];
        each(scripts, function (script) {
            ScriptLoader.ScriptLoader.add(pluginUrl + '/' + script);
        });
    };
    var loadDependencies = function (name, addOnUrl, success, scope) {
        var deps = dependencies(name);
        each(deps, function (dep) {
            var newUrl = createUrl(addOnUrl, dep);
            load(newUrl.resource, newUrl, undefined, undefined);
        });
        if (success) {
            if (scope) {
                success.call(scope);
            }
            else {
                success.call(ScriptLoader);
            }
        }
    };
    var load = function (name, addOnUrl, success, scope, failure) {
        if (urls[name]) {
            return;
        }
        var urlString = typeof addOnUrl === 'string' ? addOnUrl : addOnUrl.prefix + addOnUrl.resource + addOnUrl.suffix;
        if (urlString.indexOf('/') !== 0 && urlString.indexOf('://') === -1) {
            urlString = AddOnManager.baseURL + '/' + urlString;
        }
        urls[name] = urlString.substring(0, urlString.lastIndexOf('/'));
        if (lookup[name]) {
            loadDependencies(name, addOnUrl, success, scope);
        }
        else {
            ScriptLoader.ScriptLoader.add(urlString, function () { return loadDependencies(name, addOnUrl, success, scope); }, scope, failure);
        }
    };
    var waitFor = function (name, callback) {
        if (lookup.hasOwnProperty(name)) {
            callback();
        }
        else {
            _listeners.push({ name: name, callback: callback });
        }
    };
    return {
        items: items,
        urls: urls,
        lookup: lookup,
        _listeners: _listeners,
        /**
         * Returns the specified add on by the short name.
         *
         * @method get
         * @param {String} name Add-on to look for.
         * @return {tinymce.Theme/tinymce.Plugin} Theme or plugin add-on instance or undefined.
         */
        get: get,
        dependencies: dependencies,
        /**
         * Loads a language pack for the specified add-on.
         *
         * @method requireLangPack
         * @param {String} name Short name of the add-on.
         * @param {String} languages Optional comma or space separated list of languages to check if it matches the name.
         */
        requireLangPack: requireLangPack,
        /**
         * Adds a instance of the add-on by it's short name.
         *
         * @method add
         * @param {String} id Short name/id for the add-on.
         * @param {tinymce.Theme/tinymce.Plugin} addOn Theme or plugin to add.
         * @return {tinymce.Theme/tinymce.Plugin} The same theme or plugin instance that got passed in.
         * @example
         * // Create a simple plugin
         * tinymce.create('tinymce.plugins.TestPlugin', {
         *   TestPlugin: function(ed, url) {
         *   ed.on('click', function(e) {
         *      ed.windowManager.alert('Hello World!');
         *   });
         *   }
         * });
         *
         * // Register plugin using the add method
         * tinymce.PluginManager.add('test', tinymce.plugins.TestPlugin);
         *
         * // Initialize TinyMCE
         * tinymce.init({
         *  ...
         *  plugins: '-test' // Init the plugin but don't try to load it
         * });
         */
        add: add,
        remove: remove,
        createUrl: createUrl,
        /**
         * Add a set of components that will make up the add-on. Using the url of the add-on name as the base url.
         * This should be used in development mode.  A new compressor/javascript munger process will ensure that the
         * components are put together into the plugin.js file and compressed correctly.
         *
         * @method addComponents
         * @param {String} pluginName name of the plugin to load scripts from (will be used to get the base url for the plugins).
         * @param {Array} scripts Array containing the names of the scripts to load.
         */
        addComponents: addComponents,
        /**
         * Loads an add-on from a specific url.
         *
         * @method load
         * @param {String} name Short name of the add-on that gets loaded.
         * @param {String} addOnUrl URL to the add-on that will get loaded.
         * @param {function} success Optional success callback to execute when an add-on is loaded.
         * @param {Object} scope Optional scope to execute the callback in.
         * @param {function} failure Optional failure callback to execute when an add-on failed to load.
         * @example
         * // Loads a plugin from an external URL
         * tinymce.PluginManager.load('myplugin', '/some/dir/someplugin/plugin.js');
         *
         * // Initialize TinyMCE
         * tinymce.init({
         *  ...
         *  plugins: '-myplugin' // Don't try to load it again
         * });
         */
        load: load,
        waitFor: waitFor
    };
}
(function (AddOnManager) {
    AddOnManager.PluginManager = AddOnManager();
    AddOnManager.ThemeManager = AddOnManager();
})(AddOnManager || (AddOnManager = {}));
//# sourceMappingURL=AddOnManager.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Window from './Window';
import MessageBox from './MessageBox';
import { document } from '@ephox/dom-globals';
export default function (editor) {
    var open = function (args, params, closeCallback) {
        var win;
        args.title = args.title || ' ';
        // Handle URL
        args.url = args.url || args.file; // Legacy
        if (args.url) {
            args.width = parseInt(args.width || 320, 10);
            args.height = parseInt(args.height || 240, 10);
        }
        // Handle body
        if (args.body) {
            args.items = {
                defaults: args.defaults,
                type: args.bodyType || 'form',
                items: args.body,
                data: args.data,
                callbacks: args.commands
            };
        }
        if (!args.url && !args.buttons) {
            args.buttons = [
                {
                    text: 'Ok', subtype: 'primary', onclick: function () {
                        win.find('form')[0].submit();
                    }
                },
                {
                    text: 'Cancel', onclick: function () {
                        win.close();
                    }
                }
            ];
        }
        win = new Window(args);
        win.on('close', function () {
            closeCallback(win);
        });
        // Handle data
        if (args.data) {
            win.on('postRender', function () {
                this.find('*').each(function (ctrl) {
                    var name = ctrl.name();
                    if (name in args.data) {
                        ctrl.value(args.data[name]);
                    }
                });
            });
        }
        // store args and parameters
        win.features = args || {};
        win.params = params || {};
        // Always render dialogs into the body since webkit would scroll ui containers
        // if you open a fixed container and move focus to an input within that container
        win = win.renderTo(document.body).reflow();
        return win;
    };
    var alert = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.alert(message, function () {
            choiceCallback();
        });
        win.on('close', function () {
            closeCallback(win);
        });
        return win;
    };
    var confirm = function (message, choiceCallback, closeCallback) {
        var win;
        win = MessageBox.confirm(message, function (state) {
            choiceCallback(state);
        });
        win.on('close', function () {
            closeCallback(win);
        });
        return win;
    };
    var close = function (window) {
        window.close();
    };
    var getParams = function (window) {
        return window.params;
    };
    var setParams = function (window, params) {
        window.params = params;
    };
    return {
        open: open,
        alert: alert,
        confirm: confirm,
        close: close,
        getParams: getParams,
        setParams: setParams
    };
}
//# sourceMappingURL=WindowManagerImpl.js.map
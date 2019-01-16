/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    get: (editor: any) => {
        renderUI: (args: any) => {};
        resizeTo: (w: any, h: any) => void;
        resizeBy: (dw: any, dh: any) => void;
        getNotificationManagerImpl: () => {
            open: (args: any, closeCallback: any) => any;
            close: (notification: any) => void;
            reposition: (notifications: any) => void;
            getArgs: (notification: any) => any;
        };
        getWindowManagerImpl: () => {
            open: (args: any, params: any, closeCallback: any) => any;
            alert: (message: any, choiceCallback: any, closeCallback: any) => any;
            confirm: (message: any, choiceCallback: any, closeCallback: any) => any;
            close: (window: any) => void;
            getParams: (window: any) => any;
            setParams: (window: any, params: any) => void;
        };
    };
};
export default _default;

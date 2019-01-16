/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export default function (editor: any): {
    open: (args: any, params: any, closeCallback: any) => any;
    alert: (message: any, choiceCallback: any, closeCallback: any) => any;
    confirm: (message: any, choiceCallback: any, closeCallback: any) => any;
    close: (window: any) => void;
    getParams: (window: any) => any;
    setParams: (window: any, params: any) => void;
};

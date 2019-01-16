/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export default function (editor: any): {
    open: (args: any, closeCallback: any) => any;
    close: (notification: any) => void;
    reposition: (notifications: any) => void;
    getArgs: (notification: any) => any;
};

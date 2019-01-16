/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export default function (): {
    open: () => never;
    alert: () => never;
    confirm: () => never;
    close: () => never;
    getParams: () => never;
    setParams: () => never;
};

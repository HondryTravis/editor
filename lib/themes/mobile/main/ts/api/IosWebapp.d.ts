/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface MobileWebApp {
    setReadOnly(): void;
    refreshStructure(): void;
    enter(): void;
    exit(): void;
    destroy(): void;
}
declare const _default: {
    produce: (raw: {
        any: any;
    }) => MobileWebApp;
};
export default _default;

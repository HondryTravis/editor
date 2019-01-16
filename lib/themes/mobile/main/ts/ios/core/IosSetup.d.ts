/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export interface IosApi {
    toEditing: () => void;
    toReading: () => void;
    onToolbarTouch: (event: any) => void;
    refreshSelection: () => void;
    clearSelection: () => void;
    highlightSelection: () => void;
    scrollIntoView: (top: any, bottom: any) => void;
    updateToolbarPadding: (...x: any[]) => void;
    setViewportOffset: (newYOffset: any) => void;
    syncHeight: () => void;
    refreshStructure: () => void;
    destroy: () => void;
}
declare const _default: {
    setup: (bag: any) => {
        toEditing: () => void;
        toReading: () => void;
        onToolbarTouch: (event: any) => void;
        refreshSelection: () => void;
        clearSelection: () => void;
        highlightSelection: () => void;
        scrollIntoView: (top: any, bottom: any) => void;
        updateToolbarPadding: (...args: any[]) => void;
        setViewportOffset: (newYOffset: any) => void;
        syncHeight: () => void;
        refreshStructure: () => void;
        destroy: () => void;
    };
};
export default _default;

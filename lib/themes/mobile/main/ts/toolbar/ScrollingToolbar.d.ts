/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { ComponentApi } from '@ephox/alloy';
export default function (): {
    wrapper: (...args: any[]) => ComponentApi.AlloyComponent;
    toolbar: (...args: any[]) => ComponentApi.AlloyComponent;
    createGroups: (gs: any) => import("@ephox/alloy").SketchSpec[];
    setGroups: (gs: any) => void;
    setContextToolbar: (gs: any) => void;
    restoreToolbar: () => void;
    refresh: () => void;
    focus: () => void;
};

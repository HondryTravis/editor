/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { SketchSpec } from '@ephox/alloy';
declare const field: (name: any, placeholder: any) => {
    name: any;
    spec: SketchSpec;
};
declare const hidden: (name: any) => {
    name: any;
    spec: SketchSpec;
};
export { field, hidden };

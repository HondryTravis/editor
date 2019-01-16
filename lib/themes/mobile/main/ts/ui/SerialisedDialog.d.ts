/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Behaviour } from '@ephox/alloy';
declare const sketch: (rawSpec: any) => {
    dom: import("@ephox/alloy").RawDomSchema;
    components: import("@ephox/alloy").SimpleSpec[];
    behaviours: Record<string, Behaviour.ConfiguredBehaviour<any, any>>;
};
export { sketch };

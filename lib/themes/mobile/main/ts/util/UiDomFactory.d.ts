/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { RawDomSchema } from '@ephox/alloy';
declare const dom: (rawHtml: any) => RawDomSchema;
declare const spec: (rawHtml: any) => {
    dom: RawDomSchema;
};
export { dom, spec };

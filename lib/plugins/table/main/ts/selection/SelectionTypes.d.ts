/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Adt } from '@ephox/katamari';
declare const _default: {
    cata: (subject: any, onNone: any, onMultiple: any, onSingle: any) => any;
    none: (...data: any[]) => Adt;
    multiple: (...data: any[]) => Adt;
    single: (...data: any[]) => Adt;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
declare const _default: {
    fromDom: (tableElm: any) => {
        width: () => any;
        element: () => any;
        rows: () => any;
    };
    toDom: (table: any) => Element;
    subsection: (table: any, startElement: any, endElement: any) => Option<{
        width: () => any;
        element: () => any;
        rows: () => any;
    }>;
};
export default _default;

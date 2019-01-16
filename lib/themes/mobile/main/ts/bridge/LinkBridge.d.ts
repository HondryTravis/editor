/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
declare const _default: {
    getInfo: (editor: any) => {
        url: any;
        text: any;
        title: any;
        target: any;
        link: Option<any>;
    };
    applyInfo: (editor: any, info: any) => void;
    query: (editor: any) => Option<Element>;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { Option } from '@ephox/katamari';
export declare enum ListType {
    OL = "OL",
    UL = "UL",
    DL = "DL"
}
declare const getListType: (list: Element) => Option<ListType>;
declare const isList: (el: Element) => boolean;
export { isList, getListType };

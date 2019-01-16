/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import { Entry } from './Entry';
export interface ItemTuple {
    start: Element;
    end: Element;
}
export interface EntrySet {
    entries: Entry[];
    sourceList: Element;
}
declare const parseLists: (lists: Element[], itemSelection: Option<ItemTuple>) => EntrySet[];
export { parseLists };

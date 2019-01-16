/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
import { ListType } from './ListType';
export interface Entry {
    depth: number;
    content: Element[];
    isSelected: boolean;
    listType: ListType;
    listAttributes: Record<string, any>;
    itemAttributes: Record<string, any>;
}
export declare const isIndented: (entry: Entry) => boolean;
export declare const isSelected: (entry: Entry) => boolean;

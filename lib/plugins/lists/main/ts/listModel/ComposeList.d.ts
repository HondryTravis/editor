/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Document } from '@ephox/dom-globals';
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import { Entry } from './Entry';
declare const composeList: (scope: Document, entries: Entry[]) => Option<Element>;
export { composeList };

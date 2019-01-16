/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element } from '@ephox/sugar';
declare const _default: {
    parentsUntil: (start: Element, root: Element, predicate: (elm: Element) => boolean) => Element[];
    parents: (start: Element, root: Element) => Element[];
    parentsAndSelf: (start: Element, root: Element) => Element[];
};
export default _default;

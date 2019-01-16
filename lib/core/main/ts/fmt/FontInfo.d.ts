/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Element, Node } from '@ephox/dom-globals';
declare const _default: {
    getFontSize: (rootElm: Element, elm: Node) => string;
    getFontFamily: (rootElm: Element, elm: Node) => string;
    toPt: (fontSize: string, precision?: number) => string;
};
export default _default;

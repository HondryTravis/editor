/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element, Range, Node } from '@ephox/dom-globals';
import { DOMUtils } from 'tinymce/core/api/dom/DOMUtils';
declare const getStart: (root: Element, rng: Range, real?: boolean) => Element;
declare const getEnd: (root: Element, rng: Range, real?: boolean) => Element;
declare const getNode: (root: Element, rng: Range) => Element;
declare const getSelectedBlocks: (dom: DOMUtils, rng: Range, startElm?: Element, endElm?: Element) => Element[];
declare const select: (dom: any, node: Node, content?: boolean) => Option<any>;
export { getStart, getEnd, getNode, getSelectedBlocks, select };

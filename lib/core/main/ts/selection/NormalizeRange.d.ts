/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { DOMUtils } from 'tinymce/core/api/dom/DOMUtils';
import { Range } from '@ephox/dom-globals';
declare const _default: {
    normalize: (dom: DOMUtils, rng: Range) => Option<Range>;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Selection } from '../api/dom/Selection';
import { Bookmark } from './BookmarkTypes';
import { Range } from '@ephox/dom-globals';
declare const _default: {
    resolve: (selection: Selection, bookmark: Bookmark) => Option<Range>;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Editor } from 'tinymce/core/api/Editor';
export interface ResizeHandler {
    lazyResize: () => Option<any>;
    lazyWire: () => any;
    destroy: () => void;
}
export declare const ResizeHandler: (editor: Editor) => ResizeHandler;

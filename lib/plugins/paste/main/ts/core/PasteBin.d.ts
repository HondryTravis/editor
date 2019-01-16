/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { Element, HTMLElement, Range } from '@ephox/dom-globals';
declare const getPasteBinParent: (editor: Editor) => Element;
interface PasteBin {
    create: () => void;
    remove: () => void;
    getEl: () => HTMLElement;
    getHtml: () => string;
    getLastRng: () => Range;
    isDefault: () => boolean;
    isDefaultContent: (content: any) => boolean;
}
/**
 * @class tinymce.pasteplugin.PasteBin
 * @private
 */
declare const PasteBin: (editor: any) => PasteBin;
export { PasteBin, getPasteBinParent };

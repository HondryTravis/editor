/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { HTMLElement } from '@ephox/dom-globals';
declare const _default: {
    firePastePreProcess: (editor: Editor, html: string, internal: boolean, isWordHtml: boolean) => any;
    firePastePostProcess: (editor: Editor, node: HTMLElement, internal: boolean, isWordHtml: boolean) => any;
    firePastePlainTextToggle: (editor: Editor, state: boolean) => any;
    firePaste: (editor: Editor, ieFake: boolean) => any;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { InlitePanel } from 'tinymce/themes/inlite/ui/Panel';
export interface ContextToolbar {
    predicate: (elm: any) => boolean;
    id: string;
    items: string | string[];
}
declare const _default: {
    renderUI: (editor: Editor, panel: InlitePanel) => {};
};
export default _default;

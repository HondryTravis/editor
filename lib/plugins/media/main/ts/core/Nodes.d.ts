/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Node from 'tinymce/core/api/html/Node';
import { Editor } from 'tinymce/core/api/Editor';
declare const _default: {
    createPreviewIframeNode: (editor: Editor, node: Node) => any;
    createPlaceholderNode: (editor: Editor, node: Node) => any;
    placeHolderConverter: (editor: Editor) => (nodes: any) => void;
};
export default _default;

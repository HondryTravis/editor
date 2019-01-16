/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { AnnotationsRegistry } from 'tinymce/core/annotate/AnnotationsRegistry';
import { Editor } from 'tinymce/core/api/Editor';
import { Option, Cell } from '@ephox/katamari';
export interface AnnotationChanges {
    addListener: (name: string, f: AnnotationListener) => void;
}
export declare type AnnotationListener = (state: boolean, name: string, data?: {
    uid: string;
    nodes: any[];
}) => void;
export interface AnnotationListenerData {
    listeners: AnnotationListener[];
    previous: Cell<Option<string>>;
}
export declare type AnnotationListenerMap = Record<string, AnnotationListenerData>;
declare const setup: (editor: Editor, registry: AnnotationsRegistry) => AnnotationChanges;
export { setup };

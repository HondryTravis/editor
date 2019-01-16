/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import * as AnnotationChanges from 'tinymce/core/annotate/AnnotationChanges';
import { Decorator, DecoratorData } from 'tinymce/core/annotate/Wrapping';
export declare type AnnotationListenerApi = AnnotationChanges.AnnotationListener;
/**
 * This is the annotator api.
 *
 * @class tinymce.Annotator
 */
export interface Annotator {
    register: (name: string, settings: AnnotatorSettings) => void;
    annotate: (name: string, data: DecoratorData) => void;
    annotationChanged: (name: string, f: AnnotationListenerApi) => void;
    remove: (name: string) => void;
    getAll: (name: string) => Record<string, any>;
}
export interface AnnotatorSettings {
    decorate: Decorator;
    persistent?: boolean;
}
export default function (editor: any): Annotator;

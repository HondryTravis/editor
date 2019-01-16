/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { AnnotatorSettings } from 'tinymce/core/annotate/AnnotationsRegistry';
import { Editor } from 'tinymce/core/api/Editor';
export declare type DecoratorData = Record<string, any>;
export declare type Decorator = (uid: string, data: DecoratorData) => {
    attributes?: {};
    classes?: string[];
};
declare const annotateWithBookmark: (editor: Editor, name: string, settings: AnnotatorSettings, data: {}) => void;
export { annotateWithBookmark };

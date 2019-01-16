/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Entry } from './Entry';
export declare const enum IndentValue {
    Indent = "Indent",
    Outdent = "Outdent",
    Flatten = "Flatten"
}
export declare const indentEntry: (indentation: IndentValue, entry: Entry) => void;

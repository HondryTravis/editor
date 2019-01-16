/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    done: (editor: any, currentIndexState: any, keepEditorSelection?: any) => any;
    find: (editor: any, currentIndexState: any, text: any, matchCase: any, wholeWord: any) => number;
    next: (editor: any, currentIndexState: any) => void;
    prev: (editor: any, currentIndexState: any) => void;
    replace: (editor: any, currentIndexState: any, text: any, forward?: any, all?: any) => any;
    hasNext: (editor: any, currentIndexState: any) => boolean;
    hasPrev: (editor: any, currentIndexState: any) => boolean;
};
export default _default;

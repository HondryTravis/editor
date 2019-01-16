/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    matchNode: (ed: any, node: any, name: any, vars?: any, similar?: any) => any;
    matchName: (dom: any, node: any, format: any) => any;
    match: (editor: any, name: any, vars: any, node: any) => any;
    matchAll: (editor: any, names: any, vars: any) => any[];
    canApply: (editor: any, name: any) => boolean;
    matchesUnInheritedFormatSelector: (ed: any, node: any, name: any) => boolean;
};
export default _default;

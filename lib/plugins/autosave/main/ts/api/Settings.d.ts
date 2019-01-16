/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const shouldAskBeforeUnload: (editor: any) => any;
declare const getAutoSavePrefix: (editor: any) => any;
declare const shouldRestoreWhenEmpty: (editor: any) => any;
declare const getAutoSaveInterval: (editor: any) => number;
declare const getAutoSaveRetention: (editor: any) => number;
export { shouldAskBeforeUnload, getAutoSavePrefix, shouldRestoreWhenEmpty, getAutoSaveInterval, getAutoSaveRetention };

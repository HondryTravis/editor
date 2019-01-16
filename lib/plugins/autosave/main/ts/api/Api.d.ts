/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const get: (editor: any) => {
    hasDraft: () => boolean;
    storeDraft: () => void;
    restoreDraft: () => void;
    removeDraft: (fire?: boolean) => void;
    isEmpty: (html?: string) => boolean;
};
export { get };

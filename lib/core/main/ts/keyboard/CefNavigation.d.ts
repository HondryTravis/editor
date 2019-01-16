/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const moveH: (editor: any, forward: boolean) => () => boolean;
declare const moveV: (editor: any, down: boolean) => () => boolean;
export { moveH, moveV };

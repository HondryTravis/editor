/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * This file includes fixes for various browser quirks it's made to make it easy to add/remove browser specific fixes.
 *
 * @private
 * @class tinymce.util.Quirks
 */
export default function (editor: any): {
    refreshContentEditable: () => void;
    isHidden: () => boolean | 0;
};

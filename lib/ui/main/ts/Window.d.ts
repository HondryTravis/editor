/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Creates a new window.
 *
 * @-x-less Window.less
 * @class tinymce.ui.Window
 * @extends tinymce.ui.FloatPanel
 */
interface Window {
    _fullscreen: boolean;
    layoutRect: any;
    moveTo: Function;
    settings: any;
}
declare const Window: any;
export default Window;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Constant that is true if the browser is Opera.
     *
     * @property opera
     * @type Boolean
     * @final
     */
    opera: any;
    /**
     * Constant that is true if the browser is WebKit (Safari/Chrome).
     *
     * @property webKit
     * @type Boolean
     * @final
     */
    webkit: any;
    /**
     * Constant that is more than zero if the browser is IE.
     *
     * @property ie
     * @type Boolean
     * @final
     */
    ie: any;
    /**
     * Constant that is true if the browser is Gecko.
     *
     * @property gecko
     * @type Boolean
     * @final
     */
    gecko: any;
    /**
     * Constant that is true if the os is Mac OS.
     *
     * @property mac
     * @type Boolean
     * @final
     */
    mac: any;
    /**
     * Constant that is true if the os is iOS.
     *
     * @property iOS
     * @type Boolean
     * @final
     */
    iOS: any;
    /**
     * Constant that is true if the os is android.
     *
     * @property android
     * @type Boolean
     * @final
     */
    android: any;
    /**
     * Constant that is true if the browser supports editing.
     *
     * @property contentEditable
     * @type Boolean
     * @final
     */
    contentEditable: any;
    /**
     * Transparent image data url.
     *
     * @property transparentSrc
     * @type Boolean
     * @final
     */
    transparentSrc: string;
    /**
     * Returns true/false if the browser can or can't place the caret after a inline block like an image.
     *
     * @property noCaretAfter
     * @type Boolean
     * @final
     */
    caretAfter: boolean;
    /**
     * Constant that is true if the browser supports native DOM Ranges. IE 9+.
     *
     * @property range
     * @type Boolean
     */
    range: boolean;
    /**
     * Returns the IE document mode for non IE browsers this will fake IE 10.
     *
     * @property documentMode
     * @type Number
     */
    documentMode: any;
    /**
     * Constant that is true if the browser has a modern file api.
     *
     * @property fileApi
     * @type Boolean
     */
    fileApi: any;
    /**
     * Constant that is true if the browser supports contentEditable=false regions.
     *
     * @property ceFalse
     * @type Boolean
     */
    ceFalse: boolean;
    cacheSuffix: any;
    container: any;
    overrideViewPort: any;
    experimentalShadowDom: boolean;
    /**
     * Constant if CSP mode is possible or not. Meaning we can't use script urls for the iframe.
     */
    canHaveCSP: boolean;
    desktop: boolean;
    windowsPhone: any;
};
export default _default;

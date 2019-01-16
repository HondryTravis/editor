/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/// <reference types="node" />
declare const _default: {
    /**
     * Requests an animation frame and fallbacks to a timeout on older browsers.
     *
     * @method requestAnimationFrame
     * @param {function} callback Callback to execute when a new frame is available.
     * @param {DOMElement} element Optional element to scope it to.
     */
    requestAnimationFrame(callback: any, element?: any): void;
    /**
     * Sets a timer in ms and executes the specified callback when the timer runs out.
     *
     * @method setTimeout
     * @param {function} callback Callback to execute when timer runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
    setTimeout: (callback: any, time?: any) => NodeJS.Timer;
    /**
     * Sets an interval timer in ms and executes the specified callback at every interval of that time.
     *
     * @method setInterval
     * @param {function} callback Callback to execute when interval time runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
    setInterval: (callback: any, time?: any) => NodeJS.Timer;
    /**
     * Sets an editor timeout it's similar to setTimeout except that it checks if the editor instance is
     * still alive when the callback gets executed.
     *
     * @method setEditorTimeout
     * @param {tinymce.Editor} editor Editor instance to check the removed state on.
     * @param {function} callback Callback to execute when timer runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
    setEditorTimeout(editor: any, callback: any, time?: any): NodeJS.Timer;
    /**
     * Sets an interval timer it's similar to setInterval except that it checks if the editor instance is
     * still alive when the callback gets executed.
     *
     * @method setEditorInterval
     * @param {function} callback Callback to execute when interval time runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
    setEditorInterval(editor: any, callback: any, time?: any): any;
    /**
     * Creates debounced callback function that only gets executed once within the specified time.
     *
     * @method debounce
     * @param {function} callback Callback to execute when timer finishes.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Function} debounced function callback.
     */
    debounce: (callback: any, time?: any) => any;
    throttle: (callback: any, time?: any) => any;
    /**
     * Clears an interval timer so it won't execute.
     *
     * @method clearInterval
     * @param {Number} Interval timer id number.
     */
    clearInterval: (id: any) => void;
    /**
     * Clears an timeout timer so it won't execute.
     *
     * @method clearTimeout
     * @param {Number} Timeout timer id number.
     */
    clearTimeout: (id: any) => void;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Fires the specified event by name. Consult the
     * <a href="/docs/advanced/events">event reference</a> for more details on each event.
     *
     * @method fire
     * @param {String} name Name of the event to fire.
     * @param {Object?} args Event arguments.
     * @param {Boolean?} bubble True/false if the event is to be bubbled.
     * @return {Object} Event args instance passed in.
     * @example
     * instance.fire('event', {...});
     */
    fire(name: any, args: any, bubble: any): any;
    /**
     * Binds an event listener to a specific event by name. Consult the
     * <a href="/docs/advanced/events">event reference</a> for more details on each event.
     *
     * @method on
     * @param {String} name Event name or space separated list of events to bind.
     * @param {callback} callback Callback to be executed when the event occurs.
     * @param {Boolean} first Optional flag if the event should be prepended. Use this with care.
     * @return {Object} Current class instance.
     * @example
     * instance.on('event', function(e) {
     *     // Callback logic
     * });
     */
    on(name: any, callback: any, prepend: any): any;
    /**
     * Unbinds an event listener to a specific event by name. Consult the
     * <a href="/docs/advanced/events">event reference</a> for more details on each event.
     *
     * @method off
     * @param {String?} name Name of the event to unbind.
     * @param {callback?} callback Callback to unbind.
     * @return {Object} Current class instance.
     * @example
     * // Unbind specific callback
     * instance.off('event', handler);
     *
     * // Unbind all listeners by name
     * instance.off('event');
     *
     * // Unbind all events
     * instance.off();
     */
    off(name: any, callback: any): any;
    /**
     * Bind the event callback and once it fires the callback is removed. Consult the
     * <a href="/docs/advanced/events">event reference</a> for more details on each event.
     *
     * @method once
     * @param {String} name Name of the event to bind.
     * @param {callback} callback Callback to bind only once.
     * @return {Object} Current class instance.
     */
    once(name: any, callback: any): any;
    /**
     * Returns true/false if the object has a event of the specified name.
     *
     * @method hasEventListeners
     * @param {String} name Name of the event to check for.
     * @return {Boolean} true/false if the event exists or not.
     */
    hasEventListeners(name: any): any;
};
export default _default;

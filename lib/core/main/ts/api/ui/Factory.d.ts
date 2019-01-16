/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Adds a new control instance type to the factory.
     *
     * @method add
     * @param {String} type Type name for example "button".
     * @param {function} typeClass Class type function.
     */
    add(type: any, typeClass: any): void;
    /**
     * Returns true/false if the specified type exists or not.
     *
     * @method has
     * @param {String} type Type to look for.
     * @return {Boolean} true/false if the control by name exists.
     */
    has(type: any): boolean;
    /**
     * Returns ui control module by name.
     *
     * @method get
     * @param {String} type Type get.
     * @return {Object} Module or undefined.
     */
    get(type: any): any;
    /**
     * Creates a new control instance based on the settings provided. The instance created will be
     * based on the specified type property it can also create whole structures of components out of
     * the specified JSON object.
     *
     * @example
     * tinymce.ui.Factory.create({
     *     type: 'button',
     *     text: 'Hello world!'
     * });
     *
     * @method create
     * @param {Object/String} settings Name/Value object with items used to create the type.
     * @return {tinymce.ui.Control} Control instance based on the specified type.
     */
    create(type: any, settings?: any): any;
};
export default _default;

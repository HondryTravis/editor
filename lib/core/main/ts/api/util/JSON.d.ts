/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Serializes the specified object as a JSON string.
     *
     * @method serialize
     * @param {Object} obj Object to serialize as a JSON string.
     * @param {String} quote Optional quote string defaults to ".
     * @return {string} JSON string serialized from input.
     */
    serialize: (o: any, quote?: any) => any;
    /**
     * Unserializes/parses the specified JSON string into a object.
     *
     * @method parse
     * @param {string} s JSON String to parse into a JavaScript object.
     * @return {Object} Object from input JSON string or undefined if it failed.
     */
    parse(text: any): any;
};
export default _default;

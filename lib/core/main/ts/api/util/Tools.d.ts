/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    trim: (str: any) => string;
    /**
     * Returns true/false if the object is an array or not.
     *
     * @method isArray
     * @param {Object} obj Object to check.
     * @return {boolean} true/false state if the object is an array or not.
     */
    isArray: (arg: any) => arg is any[];
    is: (obj: {} | Record<string, any>, type: string) => boolean;
    /**
     * Converts the specified object into a real JavaScript array.
     *
     * @method toArray
     * @param {Object} obj Object to convert into array.
     * @return {Array} Array object based in input.
     */
    toArray: (obj: any) => any;
    makeMap: (items: any, delim?: any, map?: any) => any;
    /**
     * Performs an iteration of all items in a collection such as an object or array. This method will execure the
     * callback function for each item in the collection, if the callback returns false the iteration will terminate.
     * The callback has the following format: cb(value, key_or_index).
     *
     * @method each
     * @param {Object} o Collection to iterate.
     * @param {function} cb Callback function to execute for each item.
     * @param {Object} s Optional scope to execute the callback in.
     * @example
     * // Iterate an array
     * tinymce.each([1,2,3], function(v, i) {
     *     console.debug("Value: " + v + ", Index: " + i);
     * });
     *
     * // Iterate an object
     * tinymce.each({a: 1, b: 2, c: 3], function(v, k) {
     *     console.debug("Value: " + v + ", Key: " + k);
     * });
     */
    each: (o: any, cb: any, s?: any) => 1 | 0;
    /**
     * Creates a new array by the return value of each iteration function call. This enables you to convert
     * one array list into another.
     *
     * @method map
     * @param {Array} array Array of items to iterate.
     * @param {function} callback Function to call for each item. It's return value will be the new value.
     * @return {Array} Array with new values based on function return values.
     */
    map: (array: any, callback: any) => any[];
    /**
     * Filters out items from the input array by calling the specified function for each item.
     * If the function returns false the item will be excluded if it returns true it will be included.
     *
     * @method grep
     * @param {Array} a Array of items to loop though.
     * @param {function} f Function to call for each item. Include/exclude depends on it's return value.
     * @return {Array} New array with values imported and filtered based in input.
     * @example
     * // Filter out some items, this will return an array with 4 and 5
     * var items = tinymce.grep([1,2,3,4,5], function(v) {return v > 3;});
     */
    grep: (a: any, f?: any) => any[];
    /**
     * Returns an index of the item or -1 if item is not present in the array.
     *
     * @method inArray
     * @param {any} item Item to search for.
     * @param {Array} arr Array to search in.
     * @return {Number} index of the item or -1 if item was not found.
     */
    inArray: (a: any, v: any) => any;
    hasOwn: (obj: any, prop: any) => any;
    extend: (obj: any, ext: any, ...x: any[]) => any;
    create: (s: any, p: any, root: any) => void;
    walk: (o: any, f: any, n?: any, s?: any) => void;
    createNS: (n: any, o: any) => any;
    resolve: (n: any, o?: any) => any;
    explode: (s: any, d?: any) => any;
    _addCacheSuffix: (url: any) => any;
};
export default _default;

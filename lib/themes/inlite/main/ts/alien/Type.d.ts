/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    isString: (value: any) => value is string;
    isNumber: (value: any) => value is number;
    isBoolean: (value: any) => value is boolean;
    isFunction: (value: any) => value is Function;
    isObject: (value: any) => any;
    isNull: (value: any) => boolean;
    isArray: (value: any) => value is any[];
};
export default _default;

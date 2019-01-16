/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export declare type EditorEvent<T> = T & {
    isDefaultPrevented: () => boolean;
    isPropagationStopped: () => boolean;
    isImmediatePropagationStopped: () => boolean;
};
/**
 * This class enables you to bind/unbind native events to elements and normalize it's behavior across browsers.
 */
declare const EventUtils: any;
export default EventUtils;

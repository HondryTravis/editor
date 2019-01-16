/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { KeyboardEvent } from '@ephox/dom-globals';
declare const _default: {
    BACKSPACE: number;
    DELETE: number;
    DOWN: number;
    ENTER: number;
    LEFT: number;
    RIGHT: number;
    SPACEBAR: number;
    TAB: number;
    UP: number;
    modifierPressed(e: KeyboardEvent): boolean;
    metaKeyPressed(e: KeyboardEvent): boolean;
};
/**
 * This file exposes a set of the common KeyCodes for use. Please grow it as needed.
 */
export default _default;

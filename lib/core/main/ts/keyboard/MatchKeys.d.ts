/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { KeyboardEvent } from '@ephox/dom-globals';
export interface KeyPattern {
    shiftKey?: boolean;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    keyCode?: number;
    action: () => boolean;
}
declare const _default: {
    match: (patterns: KeyPattern[], evt: KeyboardEvent) => KeyPattern[];
    action: (f: any, ...x: any[]) => () => any;
    execute: (patterns: KeyPattern[], evt: KeyboardEvent) => Option<KeyPattern>;
};
export default _default;

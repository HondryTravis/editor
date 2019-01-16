/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Node, Range } from '@ephox/dom-globals';
declare const isAfterNbsp: (container: Node, offset: number) => boolean;
declare const trimOrPadLeftRight: (rng: Range, html: string) => string;
declare const trimNbspAfterDeleteAndPadValue: (rng: Range, value: string) => string;
export { isAfterNbsp, trimNbspAfterDeleteAndPadValue, trimOrPadLeftRight };

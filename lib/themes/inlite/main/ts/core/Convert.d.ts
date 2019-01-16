/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { ClientRect } from '@ephox/dom-globals';
declare const _default: {
    fromClientRect: (clientRect: Partial<ClientRect>) => GeomRect;
    toClientRect: (geomRect: GeomRect) => ClientRect;
};
export default _default;

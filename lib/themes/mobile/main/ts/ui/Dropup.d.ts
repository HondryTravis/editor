/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { ComponentApi } from '@ephox/alloy';
import { SugarElement } from 'tinymce/themes/mobile/alien/TypeDefinitions';
export interface DropUp {
    appear: (menu: any, update: any, component: any) => void;
    disappear: (onReadyToShrink: any) => void;
    component: () => ComponentApi.AlloyComponent;
    element: () => SugarElement;
}
declare const build: (refresh: any, scrollIntoView: any) => DropUp;
export { build };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { ComponentApi, Gui } from '@ephox/alloy';
import * as Dropup from './Dropup';
import { SugarElement } from '../alien/TypeDefinitions';
export interface MobileRealm {
    system(): Gui.GuiSystem;
    element(): SugarElement;
    init(spec: any): void;
    exit(): void;
    setToolbarGroups(rawGroups: any): void;
    setContextToolbar(rawGroups: any): void;
    focusToolbar(): void;
    restoreToolbar(): void;
    updateMode(readOnly: boolean): void;
    socket(): ComponentApi.AlloyComponent;
    dropup(): Dropup.DropUp;
}
export default function (scrollIntoView: () => void): MobileRealm;

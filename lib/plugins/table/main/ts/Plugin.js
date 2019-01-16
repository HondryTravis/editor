/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import PluginManager from 'tinymce/core/api/PluginManager';
import Clipboard from './actions/Clipboard';
import { TableActions } from './actions/TableActions';
import Commands from './api/Commands';
import { ResizeHandler } from './actions/ResizeHandler';
import TabContext from './queries/TabContext';
import CellSelection from './selection/CellSelection';
import Ephemera from './selection/Ephemera';
import { Selections } from './selection/Selections';
import Buttons from './ui/Buttons';
import MenuItems from './ui/MenuItems';
import { hasTabNavigation } from './api/Settings';
import { getApi } from './api/Api';
import { Cell, Option } from '@ephox/katamari';
function Plugin(editor) {
    var resizeHandler = ResizeHandler(editor);
    var cellSelection = CellSelection(editor, resizeHandler.lazyResize);
    var actions = TableActions(editor, resizeHandler.lazyWire);
    var selections = Selections(editor);
    var clipboardRows = Cell(Option.none());
    Commands.registerCommands(editor, actions, cellSelection, selections, clipboardRows);
    Clipboard.registerEvents(editor, selections, actions, cellSelection);
    MenuItems.addMenuItems(editor, selections);
    Buttons.addButtons(editor);
    Buttons.addToolbars(editor);
    editor.on('PreInit', function () {
        editor.serializer.addTempAttr(Ephemera.firstSelected());
        editor.serializer.addTempAttr(Ephemera.lastSelected());
    });
    if (hasTabNavigation(editor)) {
        editor.on('keydown', function (e) {
            TabContext.handle(e, editor, actions, resizeHandler.lazyWire);
        });
    }
    editor.on('remove', function () {
        resizeHandler.destroy();
        cellSelection.destroy();
    });
    return getApi(editor, clipboardRows);
}
PluginManager.add('table', Plugin);
export default function () { }
//# sourceMappingURL=Plugin.js.map
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

const shouldNeverUseNative = function (editor) {
  return editor.settings.contextmenu_never_use_native;
};

const getContextMenu = function (editor) {
  return editor.getParam('contextmenu', 'copy paste Cut undo align fontstyle inserttable image attachment link hr checkbox insertrowbefore insertrowafter insertcolbefore insertcolafter deleterow deletecol mergeorsplit tablestyle deletetable');
};

export default {
  shouldNeverUseNative,
  getContextMenu
};

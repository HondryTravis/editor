/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import { Fun } from '@ephox/katamari';
import { Editor } from 'tinymce/core/api/Editor';
import { Clipboard } from '../api/Clipboard';

const stateChange = function (editor: Editor, clipboard: Clipboard, e) {
  const ctrl = e.control;

  ctrl.active(clipboard.pasteFormat.get() === 'text');

  editor.on('PastePlainTextToggle', function (e) {
    ctrl.active(e.state);
  });
};

const register = function (editor: Editor, clipboard: Clipboard) {
  const postRender = Fun.curry(stateChange, editor, clipboard);

  editor.addButton('pastetext', {
    active: false,
    icon: 'pastetext',
    tooltip: 'Paste as text',
    cmd: 'mceTogglePlainTextPaste',
    onPostRender: postRender
  });

  editor.addMenuItem('pastetext', {
    text: 'Paste as text',
    selectable: true,
    active: clipboard.pasteFormat,
    cmd: 'mceTogglePlainTextPaste',
    onPostRender: postRender
  });
  editor.addMenuItem('copy', {
    text: 'copy',
    icon: 'copy',
    shortcut: 'Meta+C',
    onclick: () => {
      editor.execCommand('copy', false, null);
    }
  });
  editor.addMenuItem('paste', {
    text: 'paste',
    icon: 'paste',
    shortcut: 'Meta+V',
    onclick: () => {
      editor.execCommand('paste', false, null);
    }
  });
  editor.addMenuItem('Cut', {
    text: 'Cut',
    icon: 'cut',
    shortcut: 'Meta+X',
    onclick: () => {
      editor.execCommand('Cut', false, null);
    }
  });
  editor.addMenuItem('undo', {
    text: 'undo',
    icon: 'undo',
    shortcut: 'Meta+Z',
    // active: clipboard.pasteFormat,
    onclick: () => {
      editor.execCommand('undo', false, null);
    }
  });
};
export default {
  register
};

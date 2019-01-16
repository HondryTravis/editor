/**
 * MenuItems.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import { Arr, Option } from '@ephox/katamari';
import { TableLookup } from '@ephox/snooker';
import { Element } from '@ephox/sugar';

import InsertTable from '../actions/InsertTable';
import TableTargets from '../queries/TableTargets';
import { hasTableGrid } from '../api/Settings';
import { Editor } from 'tinymce/core/api/Editor';
import { Selections } from 'tinymce/plugins/table/selection/Selections';

// import ColorPickerHtml from 'tinymce/plugins/textcolor/ui/ColorPickerHtml';
// import Settings from 'tinymce/plugins/textcolor/api/Settings';
import ColorPickerHtml from '../../../../textcolor/main/ts/ui/ColorPickerHtml';
import Settings from '../../../../textcolor/main/ts/api/Settings';

const addMenuItems = function (editor: Editor, selections: Selections) {
  let targets = Option.none();

  const tableCtrls = [];
  const cellCtrls = [];
  const mergeCtrls = [];
  const unmergeCtrls = [];

  const noTargetDisable = function (ctrl) {
    ctrl.disabled(true);
  };

  const ctrlEnable = function (ctrl) {
    ctrl.disabled(false);
  };

  const pushTable = function () {
    const self = this;
    tableCtrls.push(self);
    targets.fold(function () {
      noTargetDisable(self);
    }, function (targets) {
      ctrlEnable(self);
    });
  };

  const pushCell = function () {
    const self = this;
    cellCtrls.push(self);
    targets.fold(function () {
      noTargetDisable(self);
    }, function (targets) {
      ctrlEnable(self);
    });
  };

  const pushMerge = function () {
    const self = this;
    mergeCtrls.push(self);
    targets.fold(function () {
      noTargetDisable(self);
    }, function (targets) {
      self.disabled(targets.mergable().isNone());
    });
  };

  const pushUnmerge = function () {
    const self = this;
    unmergeCtrls.push(self);
    targets.fold(function () {
      noTargetDisable(self);
    }, function (targets) {
      self.disabled(targets.unmergable().isNone());
    });
  };

  const setDisabledCtrls = function () {
    targets.fold(function () {
      Arr.each(tableCtrls, noTargetDisable);
      Arr.each(cellCtrls, noTargetDisable);
      Arr.each(mergeCtrls, noTargetDisable);
      Arr.each(unmergeCtrls, noTargetDisable);
    }, function (targets) {
      Arr.each(tableCtrls, ctrlEnable);
      Arr.each(cellCtrls, ctrlEnable);
      Arr.each(mergeCtrls, function (mergeCtrl) {
        mergeCtrl.disabled(targets.mergable().isNone());
      });
      Arr.each(unmergeCtrls, function (unmergeCtrl) {
        unmergeCtrl.disabled(targets.unmergable().isNone());
      });
    });
  };

  editor.on('init', function () {
    editor.on('nodechange', function (e) {
      const cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
      targets = cellOpt.bind(function (cellDom) {
        const cell = Element.fromDom(cellDom);
        const table = TableLookup.table(cell);
        return table.map(function (table) {
          return TableTargets.forMenu(selections, table, cell);
        });
      });

      setDisabledCtrls();
    });
  });

  const generateTableGrid = function () {
    let html = '';

    html = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';

    for (let y = 0; y < 10; y++) {
      html += '<tr>';

      for (let x = 0; x < 10; x++) {
        html += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (y * 10 + x) + '" href="#" ' +
          'data-mce-x="' + x + '" data-mce-y="' + y + '"></a></td>';
      }

      html += '</tr>';
    }

    html += '</table>';

    html += '<div class="mce-text-center" role="presentation">1 x 1</div>';

    return html;
  };

  const selectGrid = function (editor, tx, ty, control) {
    const table = control.getEl().getElementsByTagName('table')[0];
    let x, y, focusCell, cell, active;
    const rtl = control.isRtl() || control.parent().rel === 'tl-tr';

    table.nextSibling.innerHTML = (tx + 1) + ' x ' + (ty + 1);

    if (rtl) {
      tx = 9 - tx;
    }

    for (y = 0; y < 10; y++) {
      for (x = 0; x < 10; x++) {
        cell = table.rows[y].childNodes[x].firstChild;
        active = (rtl ? x >= tx : x <= tx) && y <= ty;

        editor.dom.toggleClass(cell, 'mce-active', active);

        if (active) {
          focusCell = cell;
        }
      }
    }

    return focusCell.parentNode;
  };

  const insertTable = hasTableGrid(editor) === false ? {
    text: 'Table',
    icon: 'table',
    context: 'table',
    onclick: cmd('mceInsertTable')
  } : {
    text: 'Table',
    icon: 'table',
    context: 'table',
    ariaHideMenu: true,
    onclick (e) {
      if (e.aria) {
        this.parent().hideAll();
        e.stopImmediatePropagation();
        editor.execCommand('mceInsertTable');
      }
    },
    // onshow () {
    //   selectGrid(editor, 0, 0, this.menu.items[0]);
    // },
    // onhide () {
    //   const elements = this.menu.items[0].getEl().getElementsByTagName('a');
    //   editor.dom.removeClass(elements, 'mce-active');
    //   editor.dom.addClass(elements[0], 'mce-active');
    // },
    menu: [
      {
        type: 'container',
        html: generateTableGrid(),

        onPostRender () {
          this.lastX = this.lastY = 0;
        },

        onmousemove (e) {
          const target = e.target;
          let x, y;

          if (target.tagName.toUpperCase() === 'A') {
            x = parseInt(target.getAttribute('data-mce-x'), 10);
            y = parseInt(target.getAttribute('data-mce-y'), 10);

            if (this.isRtl() || this.parent().rel === 'tl-tr') {
              x = 9 - x;
            }

            if (x !== this.lastX || y !== this.lastY) {
              selectGrid(editor, x, y, e.control);

              this.lastX = x;
              this.lastY = y;
            }
          }
        },

        onclick (e) {
          const self = this;

          if (e.target.tagName.toUpperCase() === 'A') {
            e.preventDefault();
            e.stopPropagation();
            self.parent().cancel();

            editor.undoManager.transact(function () {
              InsertTable.insert(editor, self.lastX + 1, self.lastY + 1);
            });

            editor.addVisual();
          }
        }
      }
    ]
  };

  function cmd(command) {
    return function () {
      editor.execCommand(command);
    };
  }

  const tableProperties = {
    text: 'Table properties',
    context: 'table',
    onPostRender: pushTable,
    onclick: cmd('mceTableProps')
  };

  const deleteTable = {
    text: 'Delete table',
    context: 'table',
    onPostRender: pushTable,
    cmd: 'mceTableDelete'
  };

  const row = {
    text: 'Row',
    context: 'table',
    menu: [
      { text: 'Insert row before', onclick: cmd('mceTableInsertRowBefore'), onPostRender: pushCell },
      { text: 'Insert row after', onclick: cmd('mceTableInsertRowAfter'), onPostRender: pushCell },
      { text: 'Delete row', onclick: cmd('mceTableDeleteRow'), onPostRender: pushCell },
      { text: 'Row properties', onclick: cmd('mceTableRowProps'), onPostRender: pushCell },
      { text: '-' },
      { text: 'Cut row', onclick: cmd('mceTableCutRow'), onPostRender: pushCell },
      { text: 'Copy row', onclick: cmd('mceTableCopyRow'), onPostRender: pushCell },
      { text: 'Paste row before', onclick: cmd('mceTablePasteRowBefore'), onPostRender: pushCell },
      { text: 'Paste row after', onclick: cmd('mceTablePasteRowAfter'), onPostRender: pushCell }
    ]
  };

  const column = {
    text: 'Column',
    context: 'table',
    menu: [
      { text: 'Insert column before', onclick: cmd('mceTableInsertColBefore'), onPostRender: pushCell },
      { text: 'Insert column after', onclick: cmd('mceTableInsertColAfter'), onPostRender: pushCell },
      { text: 'Delete column', onclick: cmd('mceTableDeleteCol'), onPostRender: pushCell }
    ]
  };

  const cell = {
    separator: 'before',
    text: 'Cell',
    context: 'table',
    menu: [
      { text: 'Cell properties', onclick: cmd('mceTableCellProps'), onPostRender: pushCell },
      { text: 'Merge cells', onclick: cmd('mceTableMergeCells'), onPostRender: pushMerge },
      { text: 'Split cell', onclick: cmd('mceTableSplitCells'), onPostRender: pushUnmerge }
    ]
  };

  editor.addMenuItem('inserttable', insertTable);
  editor.addMenuItem('tableprops', tableProperties);
  editor.addMenuItem('deletetable', deleteTable);
  editor.addMenuItem('row', row);
  editor.addMenuItem('column', column);
  editor.addMenuItem('cell', cell);

  editor.addMenuItem('insertrowbefore', { text: 'Insert row before', onclick: cmd('mceTableInsertRowBefore') });
  editor.addMenuItem('insertrowafter', { text: 'Insert row after', onclick: cmd('mceTableInsertRowAfter') });
  editor.addMenuItem('insertcolbefore', { text: 'Insert column before', onclick: cmd('mceTableInsertColBefore') });
  editor.addMenuItem('insertcolafter', { text: 'Insert column after', onclick: cmd('mceTableInsertColAfter') });
  editor.addMenuItem('deleterow', { text: 'Delete row', onclick: cmd('mceTableDeleteRow') });
  editor.addMenuItem('deletecol', { text: 'Delete column', onclick: cmd('mceTableDeleteCol') });
  editor.addMenuItem('mergeorsplit', {
    text: 'Merge/Split cell',
    menu: [
      { text: 'Merge cells', onclick: cmd('mceTableMergeCells'), onPostRender: pushMerge },
      { text: 'Split cell', onclick: cmd('mceTableSplitCells'), onPostRender: pushUnmerge }
    ]
  });

  editor.addMenuItem('tablestyle', {
    text: 'Table style',
    menu: [
      {
        text: 'Cell align',
        menu: [
          { text: 'Left', onclick: () => { editor.execCommand('mceToggleFormat', false, 'alignleft'); } },
          { text: 'Center', onclick: () => { editor.execCommand('mceToggleFormat', false, 'aligncenter'); } },
          { text: 'Right', onclick: () => { editor.execCommand('mceToggleFormat', false, 'alignright'); } },
        ]
      },
      {
        text: 'Background color',
        menu: [
          {
            type: 'container',
            html: ColorPickerHtml.getHtml(Settings.getBackColorCols(editor), Settings.getBackColorRows(editor), Settings.getBackColorMap(editor), false),
            onclick: (e) => {
              const color = e.target.dataset.mceColor;
              let elm = editor.selection.getNode();
              while (elm && elm.tagName.toLowerCase() !== 'body') {
                if (elm.tagName.toLowerCase() === 'td') {
                  break;
                }
                elm = elm.parentElement;
              }
              if (elm.tagName.toLowerCase() === 'td') {
                // tslint:disable-next-line:no-string-literal
                elm['style'].background = color === 'transparent' ? undefined : color;
              }
            }
          }
        ]
      },
      {
        text: 'Border color',
        menu: [
          {
            type: 'container',
            html: ColorPickerHtml.getHtml(Settings.getBackColorCols(editor), Settings.getBackColorRows(editor), Settings.getBackColorMap(editor), false),
            onclick: (e) => {
              const color = e.target.dataset.mceColor;
              let elm = editor.selection.getNode();
              while (elm && elm.tagName.toLowerCase() !== 'body') {
                if (elm.tagName.toLowerCase() === 'td') {
                  break;
                }
                elm = elm.parentElement;
              }
              if (elm.tagName.toLowerCase() === 'td') {
                // tslint:disable-next-line:no-string-literal
                elm['style'].borderColor = color === 'transparent' ? undefined : color;
              }
              return true;
            }
          }
        ]
      }
    ]
  });

  const defaultMenuItem = 'copy paste Cut align undo fontstyle inserttable image attachment link hr checkbox'.split(' ');
  const tableMenuItem = 'insertrowbefore insertrowafter insertcolbefore insertcolafter deleterow deletecol mergeorsplit tablestyle deletetable'.split(' ');
  const hasTable = function (elements) {
    let elem = elements;
    while (elem.nodeName && elem.nodeName.toLowerCase() !== 'body') {
      if (elem.nodeName.toLowerCase() === 'table') {
        return true;
      }
      elem = elem.parentElement;
    }
    return false;
  };
  const toggleViewState = function (self, bol) {
    const toggleVisibility = function (e) {
      if (bol === hasTable(e.element)) {
        self.show();
      } else {
        self.hide();
      }
    };

    if (bol !== hasTable(editor.dom.getParents(editor.selection.getStart(), undefined))) {
      self.hide();
    }

    editor.on('nodechange', toggleVisibility);

    self.on('remove', function () {
      editor.off('nodechange', toggleVisibility);
    });
  };
  editor.on('init', function () {
    const menuItems = editor.menuItems;
    defaultMenuItem.forEach((item) => {
      const menuItem = menuItems[item];
      if (!menuItem) {
        return;
      }
      const postRender = menuItem.onPostRender;
      menuItem.onPostRender = function (e) {
        const menu = e.control;
        // tslint:disable-next-line:no-unused-expression
        postRender && postRender.apply(menu);
        toggleViewState(menu, false);
      };
    });
    tableMenuItem.forEach((item) => {
      const menuItem = menuItems[item];
      if (!menuItem) {
         return;
      }
      const postRender = menuItem.onPostRender;
      menuItem.onPostRender = function (e) {
        const menu = e.control;
        // tslint:disable-next-line:no-unused-expression
        postRender && postRender.apply(menu);
        toggleViewState(menu, true);
      };
    });
  });
};

export default {
  addMenuItems
};

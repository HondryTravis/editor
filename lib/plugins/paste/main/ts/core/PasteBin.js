/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
import Env from 'tinymce/core/api/Env';
import { Cell } from '@ephox/katamari';
import { document } from '@ephox/dom-globals';
// We can't attach the pastebin to a H1 inline element on IE since it won't allow H1 or other
// non valid parents to be pasted into the pastebin so we need to attach it to the body
var getPasteBinParent = function (editor) {
    return Env.ie && editor.inline ? document.body : editor.getBody();
};
var isExternalPasteBin = function (editor) { return getPasteBinParent(editor) !== editor.getBody(); };
var delegatePasteEvents = function (editor, pasteBinElm, pasteBinDefaultContent) {
    if (isExternalPasteBin(editor)) {
        editor.dom.bind(pasteBinElm, 'paste keyup', function (e) {
            if (!isDefault(editor, pasteBinDefaultContent)) {
                editor.fire('paste');
            }
        });
    }
};
/**
 * Creates a paste bin element as close as possible to the current caret location and places the focus inside that element
 * so that when the real paste event occurs the contents gets inserted into this element
 * instead of the current editor selection element.
 */
var create = function (editor, lastRngCell, pasteBinDefaultContent) {
    var dom = editor.dom, body = editor.getBody();
    var pasteBinElm;
    lastRngCell.set(editor.selection.getRng());
    // Create a pastebin
    pasteBinElm = editor.dom.add(getPasteBinParent(editor), 'div', {
        'id': 'mcepastebin',
        'class': 'mce-pastebin',
        'contentEditable': true,
        'data-mce-bogus': 'all',
        'style': 'position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0'
    }, pasteBinDefaultContent);
    // Move paste bin out of sight since the controlSelection rect gets displayed otherwise on IE and Gecko
    if (Env.ie || Env.gecko) {
        dom.setStyle(pasteBinElm, 'left', dom.getStyle(body, 'direction', true) === 'rtl' ? 0xFFFF : -0xFFFF);
    }
    // Prevent focus events from bubbeling fixed FocusManager issues
    dom.bind(pasteBinElm, 'beforedeactivate focusin focusout', function (e) {
        e.stopPropagation();
    });
    delegatePasteEvents(editor, pasteBinElm, pasteBinDefaultContent);
    pasteBinElm.focus();
    editor.selection.select(pasteBinElm, true);
};
/**
 * Removes the paste bin if it exists.
 */
var remove = function (editor, lastRngCell) {
    if (getEl(editor)) {
        var pasteBinClone = void 0;
        var lastRng = lastRngCell.get();
        // WebKit/Blink might clone the div so
        // lets make sure we remove all clones
        // TODO: Man o man is this ugly. WebKit is the new IE! Remove this if they ever fix it!
        while ((pasteBinClone = editor.dom.get('mcepastebin'))) {
            editor.dom.remove(pasteBinClone);
            editor.dom.unbind(pasteBinClone);
        }
        if (lastRng) {
            editor.selection.setRng(lastRng);
        }
    }
    lastRngCell.set(null);
};
var getEl = function (editor) {
    return editor.dom.get('mcepastebin');
};
/**
 * Returns the contents of the paste bin as a HTML string.
 *
 * @return {String} Get the contents of the paste bin.
 */
var getHtml = function (editor) {
    var pasteBinElm, pasteBinClones, i, dirtyWrappers, cleanWrapper;
    // Since WebKit/Chrome might clone the paste bin when pasting
    // for example: <img style="float: right"> we need to check if any of them contains some useful html.
    // TODO: Man o man is this ugly. WebKit is the new IE! Remove this if they ever fix it!
    var copyAndRemove = function (toElm, fromElm) {
        toElm.appendChild(fromElm);
        editor.dom.remove(fromElm, true); // remove, but keep children
    };
    // find only top level elements (there might be more nested inside them as well, see TINY-1162)
    pasteBinClones = Tools.grep(getPasteBinParent(editor).childNodes, function (elm) {
        return elm.id === 'mcepastebin';
    });
    pasteBinElm = pasteBinClones.shift();
    // if clones were found, move their content into the first bin
    Tools.each(pasteBinClones, function (pasteBinClone) {
        copyAndRemove(pasteBinElm, pasteBinClone);
    });
    // TINY-1162: when copying plain text (from notepad for example) WebKit clones
    // paste bin (with styles and attributes) and uses it as a default  wrapper for
    // the chunks of the content, here we cycle over the whole paste bin and replace
    // those wrappers with a basic div
    dirtyWrappers = editor.dom.select('div[id=mcepastebin]', pasteBinElm);
    for (i = dirtyWrappers.length - 1; i >= 0; i--) {
        cleanWrapper = editor.dom.create('div');
        pasteBinElm.insertBefore(cleanWrapper, dirtyWrappers[i]);
        copyAndRemove(cleanWrapper, dirtyWrappers[i]);
    }
    return pasteBinElm ? pasteBinElm.innerHTML : '';
};
var getLastRng = function (lastRng) {
    return lastRng.get();
};
var isDefaultContent = function (pasteBinDefaultContent, content) {
    return content === pasteBinDefaultContent;
};
var isPasteBin = function (elm) {
    return elm && elm.id === 'mcepastebin';
};
var isDefault = function (editor, pasteBinDefaultContent) {
    var pasteBinElm = getEl(editor);
    return isPasteBin(pasteBinElm) && isDefaultContent(pasteBinDefaultContent, pasteBinElm.innerHTML);
};
/**
 * @class tinymce.pasteplugin.PasteBin
 * @private
 */
var PasteBin = function (editor) {
    var lastRng = Cell(null);
    var pasteBinDefaultContent = '%MCEPASTEBIN%';
    return {
        create: function () { return create(editor, lastRng, pasteBinDefaultContent); },
        remove: function () { return remove(editor, lastRng); },
        getEl: function () { return getEl(editor); },
        getHtml: function () { return getHtml(editor); },
        getLastRng: function () { return getLastRng(lastRng); },
        isDefault: function () { return isDefault(editor, pasteBinDefaultContent); },
        isDefaultContent: function (content) { return isDefaultContent(pasteBinDefaultContent, content); }
    };
};
export { PasteBin, getPasteBinParent };
//# sourceMappingURL=PasteBin.js.map
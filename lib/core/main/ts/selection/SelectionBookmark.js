/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Fun, Option } from '@ephox/katamari';
import { PlatformDetection } from '@ephox/sand';
import { Compare, Element, Node, Text, Traverse, Selection } from '@ephox/sugar';
import { document } from '@ephox/dom-globals';
var browser = PlatformDetection.detect().browser;
var clamp = function (offset, element) {
    var max = Node.isText(element) ? Text.get(element).length : Traverse.children(element).length + 1;
    if (offset > max) {
        return max;
    }
    else if (offset < 0) {
        return 0;
    }
    return offset;
};
var normalizeRng = function (rng) {
    return Selection.range(rng.start(), clamp(rng.soffset(), rng.start()), rng.finish(), clamp(rng.foffset(), rng.finish()));
};
var isOrContains = function (root, elm) {
    return Compare.contains(root, elm) || Compare.eq(root, elm);
};
var isRngInRoot = function (root) {
    return function (rng) {
        return isOrContains(root, rng.start()) && isOrContains(root, rng.finish());
    };
};
// var dumpRng = function (rng) {
//   console.log('start', rng.start().dom());
//   console.log('soffset', rng.soffset());
//   console.log('finish', rng.finish().dom());
//   console.log('foffset', rng.foffset());
//   return rng;
// };
var shouldStore = function (editor) {
    return editor.inline === true || browser.isIE();
};
var nativeRangeToSelectionRange = function (r) {
    return Selection.range(Element.fromDom(r.startContainer), r.startOffset, Element.fromDom(r.endContainer), r.endOffset);
};
var readRange = function (win) {
    var selection = win.getSelection();
    var rng = !selection || selection.rangeCount === 0 ? Option.none() : Option.from(selection.getRangeAt(0));
    return rng.map(nativeRangeToSelectionRange);
};
var getBookmark = function (root) {
    var win = Traverse.defaultView(root);
    return readRange(win.dom())
        .filter(isRngInRoot(root));
};
var validate = function (root, bookmark) {
    return Option.from(bookmark)
        .filter(isRngInRoot(root))
        .map(normalizeRng);
};
var bookmarkToNativeRng = function (bookmark) {
    var rng = document.createRange();
    try {
        // Might throw IndexSizeError
        rng.setStart(bookmark.start().dom(), bookmark.soffset());
        rng.setEnd(bookmark.finish().dom(), bookmark.foffset());
        return Option.some(rng);
    }
    catch (_) {
        return Option.none();
    }
};
var store = function (editor) {
    var newBookmark = shouldStore(editor) ? getBookmark(Element.fromDom(editor.getBody())) : Option.none();
    editor.bookmark = newBookmark.isSome() ? newBookmark : editor.bookmark;
};
var storeNative = function (editor, rng) {
    var root = Element.fromDom(editor.getBody());
    var range = shouldStore(editor) ? Option.from(rng) : Option.none();
    var newBookmark = range.map(nativeRangeToSelectionRange)
        .filter(isRngInRoot(root));
    editor.bookmark = newBookmark.isSome() ? newBookmark : editor.bookmark;
};
var getRng = function (editor) {
    var bookmark = editor.bookmark ? editor.bookmark : Option.none();
    return bookmark
        .bind(Fun.curry(validate, Element.fromDom(editor.getBody())))
        .bind(bookmarkToNativeRng);
};
var restore = function (editor) {
    getRng(editor).each(function (rng) {
        editor.selection.setRng(rng);
    });
};
export default {
    store: store,
    storeNative: storeNative,
    readRange: readRange,
    restore: restore,
    getRng: getRng,
    getBookmark: getBookmark,
    validate: validate
};
//# sourceMappingURL=SelectionBookmark.js.map
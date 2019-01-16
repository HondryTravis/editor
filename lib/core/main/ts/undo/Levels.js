/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Cell, Option } from '@ephox/katamari';
import TrimHtml from '../dom/TrimHtml';
import Fragments from './Fragments';
import { Element, Html, Remove, SelectorFilter } from '@ephox/sugar';
import { document } from '@ephox/dom-globals';
var undoLevelDocument = Cell(Option.none());
// We need to create a temporary document instead of using the global document since
// innerHTML on a detached element will still make http requests to the images
var lazyTempDocument = function () {
    return undoLevelDocument.get().getOrThunk(function () {
        var doc = document.implementation.createHTMLDocument('undo');
        undoLevelDocument.set(Option.some(doc));
        return doc;
    });
};
var hasIframes = function (html) {
    return html.indexOf('</iframe>') !== -1;
};
var createFragmentedLevel = function (fragments) {
    return {
        type: "fragmented" /* Fragmented */,
        fragments: fragments,
        content: '',
        bookmark: null,
        beforeBookmark: null
    };
};
var createCompleteLevel = function (content) {
    return {
        type: "complete" /* Complete */,
        fragments: null,
        content: content,
        bookmark: null,
        beforeBookmark: null
    };
};
var createFromEditor = function (editor) {
    var fragments, content, trimmedFragments;
    fragments = Fragments.read(editor.getBody());
    trimmedFragments = Arr.bind(fragments, function (html) {
        var trimmed = TrimHtml.trimInternal(editor.serializer, html);
        return trimmed.length > 0 ? [trimmed] : [];
    });
    content = trimmedFragments.join('');
    return hasIframes(content) ? createFragmentedLevel(trimmedFragments) : createCompleteLevel(content);
};
var applyToEditor = function (editor, level, before) {
    if (level.type === "fragmented" /* Fragmented */) {
        Fragments.write(level.fragments, editor.getBody());
    }
    else {
        editor.setContent(level.content, { format: 'raw' });
    }
    editor.selection.moveToBookmark(before ? level.beforeBookmark : level.bookmark);
};
var getLevelContent = function (level) {
    return level.type === "fragmented" /* Fragmented */ ? level.fragments.join('') : level.content;
};
var getCleanLevelContent = function (level) {
    var elm = Element.fromTag('body', lazyTempDocument());
    Html.set(elm, getLevelContent(level));
    Arr.each(SelectorFilter.descendants(elm, '*[data-mce-bogus]'), Remove.unwrap);
    return Html.get(elm);
};
var hasEqualContent = function (level1, level2) {
    return getLevelContent(level1) === getLevelContent(level2);
};
var hasEqualCleanedContent = function (level1, level2) {
    return getCleanLevelContent(level1) === getCleanLevelContent(level2);
};
// Most of the time the contents is equal so it's faster to first check that using strings then fallback to a cleaned dom comparison
var isEq = function (level1, level2) {
    if (!level1 || !level2) {
        return false;
    }
    else if (hasEqualContent(level1, level2)) {
        return true;
    }
    else {
        return hasEqualCleanedContent(level1, level2);
    }
};
export default {
    createFragmentedLevel: createFragmentedLevel,
    createCompleteLevel: createCompleteLevel,
    createFromEditor: createFromEditor,
    applyToEditor: applyToEditor,
    isEq: isEq
};
//# sourceMappingURL=Levels.js.map
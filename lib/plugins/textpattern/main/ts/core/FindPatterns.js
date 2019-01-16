/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { document } from '@ephox/dom-globals';
import { Option } from '@ephox/katamari';
// Finds a matching pattern to the specified text
var findPattern = function (patterns, text) {
    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        if (text.indexOf(pattern.start) !== 0) {
            continue;
        }
        if (pattern.end && text.lastIndexOf(pattern.end) !== (text.length - pattern.end.length)) {
            continue;
        }
        return pattern;
    }
};
var isMatchingPattern = function (pattern, text, offset, delta) {
    var textEnd = text.substr(offset - pattern.end.length - delta, pattern.end.length);
    return textEnd === pattern.end;
};
var hasContent = function (offset, delta, pattern) {
    return (offset - delta - pattern.end.length - pattern.start.length) > 0;
};
// Finds the best matching end pattern
var findEndPattern = function (patterns, text, offset, delta) {
    var pattern, i;
    // Find best matching end
    for (i = 0; i < patterns.length; i++) {
        pattern = patterns[i];
        if (pattern.end !== undefined && isMatchingPattern(pattern, text, offset, delta) && hasContent(offset, delta, pattern)) {
            return pattern;
        }
    }
};
var findInlinePattern = function (patterns, rng, space) {
    if (rng.collapsed === false) {
        return;
    }
    var container = rng.startContainer;
    var text = container.data;
    var delta = space === true ? 1 : 0;
    if (container.nodeType !== 3) {
        return;
    }
    // Find best matching end
    var endPattern = findEndPattern(patterns, text, rng.startOffset, delta);
    if (endPattern === undefined) {
        return;
    }
    // Find start of matched pattern
    var endOffset = text.lastIndexOf(endPattern.end, rng.startOffset - delta);
    var startOffset = text.lastIndexOf(endPattern.start, endOffset - endPattern.end.length);
    endOffset = text.indexOf(endPattern.end, startOffset + endPattern.start.length);
    if (startOffset === -1) {
        return;
    }
    // Setup a range for the matching word
    var patternRng = document.createRange();
    patternRng.setStart(container, startOffset);
    patternRng.setEnd(container, endOffset + endPattern.end.length);
    var startPattern = findPattern(patterns, patternRng.toString());
    if (endPattern === undefined || startPattern !== endPattern || (container.data.length <= endPattern.start.length + endPattern.end.length)) {
        return;
    }
    return {
        pattern: endPattern,
        startOffset: startOffset,
        endOffset: endOffset
    };
};
var findReplacementPattern = function (patterns, startSearch, text) {
    for (var i = 0; i < patterns.length; i++) {
        var index = text.lastIndexOf(patterns[i].start, startSearch);
        if (index !== -1) {
            return Option.some({
                pattern: patterns[i],
                startOffset: index
            });
        }
    }
    return Option.none();
};
export { findPattern, findEndPattern, findInlinePattern, findReplacementPattern };
//# sourceMappingURL=FindPatterns.js.map
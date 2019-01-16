/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import VK from 'tinymce/core/api/util/VK';
import { applyBlockPattern, applyInlinePatternEnter, applyInlinePatternSpace, applyReplacementPatternEnter, applyReplacementPatternSpace } from './PatternApplication';
var handleEnter = function (editor, patternSet) {
    applyReplacementPatternEnter(editor, patternSet.replacementPatterns);
    applyInlinePatternEnter(editor, patternSet.inlinePatterns);
    applyBlockPattern(editor, patternSet.blockPatterns);
};
var handleInlineKey = function (editor, patternSet) {
    applyReplacementPatternSpace(editor, patternSet.replacementPatterns);
    applyInlinePatternSpace(editor, patternSet.inlinePatterns);
};
var checkKeyEvent = function (codes, event, predicate) {
    for (var i = 0; i < codes.length; i++) {
        if (predicate(codes[i], event)) {
            return true;
        }
    }
};
var checkKeyCode = function (codes, event) {
    return checkKeyEvent(codes, event, function (code, event) {
        return code === event.keyCode && VK.modifierPressed(event) === false;
    });
};
var checkCharCode = function (chars, event) {
    return checkKeyEvent(chars, event, function (chr, event) {
        return chr.charCodeAt(0) === event.charCode;
    });
};
export default {
    handleEnter: handleEnter,
    handleInlineKey: handleInlineKey,
    checkCharCode: checkCharCode,
    checkKeyCode: checkKeyCode
};
//# sourceMappingURL=KeyHandler.js.map
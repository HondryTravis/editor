/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Matcher from './Matcher';
import Measure from './Measure';
// textSelection :: String -> (Editor -> Matcher.result | Null)
var textSelection = function (id) {
    return function (editor) {
        if (!editor.selection.isCollapsed()) {
            var result = Matcher.result(id, Measure.getSelectionRect(editor));
            return result;
        }
        return null;
    };
};
// emptyTextBlock :: [Elements], String -> (Editor -> Matcher.result | Null)
var emptyTextBlock = function (elements, id) {
    return function (editor) {
        var i;
        var textBlockElementsMap = editor.schema.getTextBlockElements();
        for (i = 0; i < elements.length; i++) {
            if (elements[i].nodeName === 'TABLE') {
                return null;
            }
        }
        for (i = 0; i < elements.length; i++) {
            if (elements[i].nodeName in textBlockElementsMap) {
                if (editor.dom.isEmpty(elements[i])) {
                    return Matcher.result(id, Measure.getSelectionRect(editor));
                }
                return null;
            }
        }
        return null;
    };
};
export default {
    textSelection: textSelection,
    emptyTextBlock: emptyTextBlock
};
//# sourceMappingURL=SelectionMatcher.js.map
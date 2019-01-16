/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
import EventProcessRanges from './EventProcessRanges';
import FragmentReader from './FragmentReader';
import MultiRange from './MultiRange';
import Zwsp from '../text/Zwsp';
var getTextContent = function (editor) {
    return Option.from(editor.selection.getRng()).map(function (r) { return Zwsp.trim(r.toString()); }).getOr('');
};
var getHtmlContent = function (editor, args) {
    var rng = editor.selection.getRng(), tmpElm = editor.dom.create('body');
    var sel = editor.selection.getSel();
    var fragment;
    var ranges = EventProcessRanges.processRanges(editor, MultiRange.getRanges(sel));
    if (rng.cloneContents) {
        fragment = args.contextual ? FragmentReader.read(Element.fromDom(editor.getBody()), ranges).dom() : rng.cloneContents();
        if (fragment) {
            tmpElm.appendChild(fragment);
        }
    }
    else {
        tmpElm.innerHTML = rng.toString();
    }
    return editor.selection.serializer.serialize(tmpElm, args);
};
var getContent = function (editor, args) {
    if (args === void 0) { args = {}; }
    args.get = true;
    args.format = args.format || 'html';
    args.selection = true;
    args = editor.fire('BeforeGetContent', args);
    if (args.isDefaultPrevented()) {
        editor.fire('GetContent', args);
        return args.content;
    }
    if (args.format === 'text') {
        return getTextContent(editor);
    }
    else {
        args.getInner = true;
        var content = getHtmlContent(editor, args);
        if (args.format === 'tree') {
            return content;
        }
        else {
            args.content = editor.selection.isCollapsed() ? '' : content;
            editor.fire('GetContent', args);
            return args.content;
        }
    }
};
export default {
    getContent: getContent
};
//# sourceMappingURL=GetSelectionContent.js.map
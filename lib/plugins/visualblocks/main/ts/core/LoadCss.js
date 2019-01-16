/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import DOMUtils from 'tinymce/core/api/dom/DOMUtils';
import Tools from 'tinymce/core/api/util/Tools';
var cssId = DOMUtils.DOM.uniqueId();
var load = function (doc, url) {
    var linkElements = Tools.toArray(doc.getElementsByTagName('link'));
    var matchingLinkElms = Tools.grep(linkElements, function (head) {
        return head.id === cssId;
    });
    if (matchingLinkElms.length === 0) {
        var linkElm = DOMUtils.DOM.create('link', {
            id: cssId,
            rel: 'stylesheet',
            href: url
        });
        doc.getElementsByTagName('head')[0].appendChild(linkElm);
    }
};
export default {
    load: load
};
//# sourceMappingURL=LoadCss.js.map
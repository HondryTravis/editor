/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { DomFactory } from '@ephox/alloy';
import { Strings } from '@ephox/katamari';
import Styles from '../style/Styles';
var dom = function (rawHtml) {
    var html = Strings.supplant(rawHtml, {
        prefix: Styles.prefix()
    });
    return DomFactory.fromHtml(html);
};
var spec = function (rawHtml) {
    var sDom = dom(rawHtml);
    return {
        dom: sDom
    };
};
export { dom, spec };
//# sourceMappingURL=UiDomFactory.js.map
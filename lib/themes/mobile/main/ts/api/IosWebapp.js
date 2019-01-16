/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { GuiFactory } from '@ephox/alloy';
import { ValueSchema } from '@ephox/boulder';
import { Fun } from '@ephox/katamari';
import { Css } from '@ephox/sugar';
import MobileSchema from './MobileSchema';
import IosMode from '../ios/core/IosMode';
import TapToEditMask from '../touch/view/TapToEditMask';
var produce = function (raw) {
    var mobile = ValueSchema.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    /* Make the toolbar */
    Css.set(mobile.toolstrip, 'width', '100%');
    Css.set(mobile.container, 'position', 'relative');
    var onView = function () {
        mobile.setReadOnly(mobile.readOnlyOnInit());
        mode.enter();
    };
    var mask = GuiFactory.build(TapToEditMask.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
        show: function () {
            mobile.alloy.add(mask);
        },
        hide: function () {
            mobile.alloy.remove(mask);
        }
    };
    var mode = IosMode.create(mobile, maskApi);
    return {
        setReadOnly: mobile.setReadOnly,
        refreshStructure: mode.refreshStructure,
        enter: mode.enter,
        exit: mode.exit,
        destroy: Fun.noop // TODO: lifecycle hookup
    };
};
export default {
    produce: produce
};
//# sourceMappingURL=IosWebapp.js.map
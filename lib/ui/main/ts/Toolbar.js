/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Container from './Container';
/**
 * Creates a new toolbar.
 *
 * @class tinymce.ui.Toolbar
 * @extends tinymce.ui.Container
 */
export default Container.extend({
    Defaults: {
        role: 'toolbar',
        layout: 'flow'
    },
    /**
     * Constructs a instance with the specified settings.
     *
     * @constructor
     * @param {Object} settings Name/value object with settings.
     */
    init: function (settings) {
        var self = this;
        self._super(settings);
        self.classes.add('toolbar');
    },
    /**
     * Called after the control has been rendered.
     *
     * @method postRender
     */
    postRender: function () {
        var self = this;
        self.items().each(function (ctrl) {
            ctrl.classes.add('toolbar-item');
        });
        return self._super();
    }
});
//# sourceMappingURL=Toolbar.js.map
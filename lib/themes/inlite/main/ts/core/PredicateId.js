/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Tools from 'tinymce/core/api/util/Tools';
var create = function (id, predicate) {
    return {
        id: id,
        predicate: predicate
    };
};
// fromContextToolbars :: [ContextToolbar] -> [PredicateId]
var fromContextToolbars = function (toolbars) {
    return Tools.map(toolbars, function (toolbar) {
        return create(toolbar.id, toolbar.predicate);
    });
};
export default {
    create: create,
    fromContextToolbars: fromContextToolbars
};
//# sourceMappingURL=PredicateId.js.map
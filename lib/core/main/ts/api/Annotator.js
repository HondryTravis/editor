/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Obj, Option } from '@ephox/katamari';
import { Remove } from '@ephox/sugar';
import * as AnnotationChanges from 'tinymce/core/annotate/AnnotationChanges';
import * as AnnotationFilter from 'tinymce/core/annotate/AnnotationFilter';
import { create } from 'tinymce/core/annotate/AnnotationsRegistry';
import { findAll, identify } from 'tinymce/core/annotate/Identification';
import { annotateWithBookmark } from 'tinymce/core/annotate/Wrapping';
export default function (editor) {
    var registry = create();
    AnnotationFilter.setup(editor, registry);
    var changes = AnnotationChanges.setup(editor, registry);
    return {
        /**
         * Registers a specific annotator by name
         *
         * @method register
         * @param {String} name the name of the annotation
         * @param {Object} settings settings for the annotation (e.g. decorate)
         */
        register: function (name, settings) {
            registry.register(name, settings);
        },
        /**
         * Applies the annotation at the current selection using data
         *
         * @method annotate
         * @param {String} name the name of the annotation to apply
         * @param {Object} data information to pass through to this particular
         * annotation
         */
        annotate: function (name, data) {
            registry.lookup(name).each(function (settings) {
                annotateWithBookmark(editor, name, settings, data);
            });
        },
        /**
         * Executes the specified callback when the current selection matches the annotation or not.
         *
         * @method annotationChanged
         * @param {String} name Name of annotation to listen for
         * @param {function} callback Calback with (state, name, and data) fired when the annotation
         * at the cursor changes. If state if false, data will not be provided.
         */
        annotationChanged: function (name, callback) {
            changes.addListener(name, callback);
        },
        /**
         * Removes any annotations from the current selection that match
         * the name
         *
         * @param remove
         * @param {String} name the name of the annotation to remove
         */
        remove: function (name) {
            identify(editor, Option.some(name)).each(function (_a) {
                var elements = _a.elements;
                Arr.each(elements, Remove.unwrap);
            });
        },
        /**
         * Retrieve all the annotations for a given name
         *
         * @method getAll
         * @param {String} name the name of the annotations to retrieve
         * @return {Object} an index of annotations from uid => DOM nodes
         */
        getAll: function (name) {
            var directory = findAll(editor, name);
            return Obj.map(directory, function (elems) { return Arr.map(elems, function (elem) { return elem.dom(); }); });
        }
    };
}
//# sourceMappingURL=Annotator.js.map
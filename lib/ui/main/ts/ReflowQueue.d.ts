/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Adds a control to the next automatic reflow call. This is the control that had a state
     * change for example if the control was hidden/shown.
     *
     * @method add
     * @param {tinymce.ui.Control} ctrl Control to add to queue.
     */
    add(ctrl: any): void;
    /**
     * Removes the specified control from the automatic reflow. This will happen when for example the user
     * manually triggers a reflow.
     *
     * @method remove
     * @param {tinymce.ui.Control} ctrl Control to remove from queue.
     */
    remove(ctrl: any): void;
};
export default _default;

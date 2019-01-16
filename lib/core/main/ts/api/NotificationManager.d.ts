/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * This class handles the creation of TinyMCE's notifications.
 *
 * @class tinymce.NotificationManager
 * @example
 * // Opens a new notification of type "error" with text "An error occurred."
 * tinymce.activeEditor.notificationManager.open({
 *    text: 'An error occurred.',
 *    type: 'error'
 * });
 */
export default function (editor: any): {
    /**
     * Opens a new notification.
     *
     * @method open
     * @param {Object} args Optional name/value settings collection contains things like timeout/color/message etc.
     */
    open: (args: any) => any;
    /**
     * Closes the top most notification.
     *
     * @method close
     */
    close: () => void;
    /**
     * Returns the currently opened notification objects.
     *
     * @method getNotifications
     * @return {Array} Array of the currently opened notifications.
     */
    getNotifications: () => any[];
};

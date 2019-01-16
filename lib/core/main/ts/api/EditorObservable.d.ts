/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare let EditorObservable: {
    /**
     * Bind any pending event delegates. This gets executed after the target body/document is created.
     *
     * @private
     */
    bindPendingEventDelegates(): void;
    /**
     * Toggles a native event on/off this is called by the EventDispatcher when
     * the first native event handler is added and when the last native event handler is removed.
     *
     * @private
     */
    toggleNativeEvent(name: any, state: any): void;
    /**
     * Unbinds all native event handlers that means delegates, custom events bound using the Events API etc.
     *
     * @private
     */
    unbindAllNativeEvents(): void;
};
export default EditorObservable;

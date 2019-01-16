/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    format: (command: any, update: any) => import("@ephox/alloy/lib/main/ts/ephox/alloy/api/behaviour/Behaviour").NamedConfiguredBehaviour<import("@ephox/alloy/lib/main/ts/ephox/alloy/behaviour/receiving/ReceivingTypes").ReceivingConfigSpec, import("@ephox/alloy/lib/main/ts/ephox/alloy/behaviour/receiving/ReceivingTypes").ReceivingConfig>;
    orientation: (onReceive: any) => import("@ephox/alloy/lib/main/ts/ephox/alloy/api/behaviour/Behaviour").NamedConfiguredBehaviour<import("@ephox/alloy/lib/main/ts/ephox/alloy/behaviour/receiving/ReceivingTypes").ReceivingConfigSpec, import("@ephox/alloy/lib/main/ts/ephox/alloy/behaviour/receiving/ReceivingTypes").ReceivingConfig>;
    receive: (channel: any, onReceive: any) => {
        key: any;
        value: {
            onReceive: any;
        };
    };
};
export default _default;

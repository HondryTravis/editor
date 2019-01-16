import { Chain, Step } from '@ephox/agar';
import { Element } from '@ephox/sugar';
declare const _default: {
    cGetFocused: Chain<{}, Element>;
    cGetParent: Chain<Element, Element>;
    sSetFieldValue: (value: any) => Step<{}, {}>;
    sSetFieldOptValue: (optVal: any) => any;
    sWaitForToggledState: (label: any, state: any, realm: any, memento: any) => Step<{}, {}>;
    sClickComponent: (realm: any, memento: any) => Step<{}, {}>;
    sStartEditor: (alloy: any) => Step<{}, {}>;
    sBroadcastState: (realm: any, channels: any, command: any, state: any) => Step<{}, {}>;
};
export default _default;

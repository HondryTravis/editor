import { Step } from '@ephox/agar';
declare const _default: {
    setup: (createComponent: any, f: any, success: any, failure: any) => void;
    mSetupKeyLogger: (body: any) => Step<{}, {}>;
    mTeardownKeyLogger: (body: any, expected: any) => Step<any, {}>;
    mAddStyles: (doc: any, styles: any) => Step<{}, {}>;
    mRemoveStyles: Step<any, {}>;
};
export default _default;

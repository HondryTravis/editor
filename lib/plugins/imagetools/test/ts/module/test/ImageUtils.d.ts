import { Step } from '@ephox/agar';
declare const _default: {
    sExecCommand: (editor: any, cmd: any, value?: any) => Step<{}, {}>;
    sLoadImage: (editor: any, url: any, size?: any) => Step<{}, {}>;
    sUploadImages: (editor: any) => Step<{}, {}>;
    sWaitForBlobImage: (editor: any) => Step<{}, {}>;
    createStateContainer: () => {
        get: () => any;
        handler: (url: any) => (blobInfo: any, success: any) => void;
        sResetState: Step<{}, {}>;
        sWaitForState: Step<{}, {}>;
    };
};
export default _default;

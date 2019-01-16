import { Step } from '@ephox/agar';
export default function (editor: any): {
    sExecToolbar: (label: any) => Step<{}, {}>;
    sExecDialog: (label: any) => Step<{}, {}>;
};

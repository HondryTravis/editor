import { Step } from '@ephox/agar';
import { Option } from '@ephox/katamari';
export default function (): {
    adder: (value: any) => () => void;
    adderH: (value: any) => () => Option<boolean>;
    clear: () => void;
    sClear: Step<{}, {}>;
    sAssertEq: (label: any, expected: any) => Step<{}, {}>;
    assertEq: (label: any, expected: any) => void;
    sAssertSortedEq: (label: any, expected: any) => Step<{}, {}>;
};

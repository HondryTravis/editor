import { Step } from '@ephox/agar';
export default function (): {
    editor: (...args: any[]) => {
        selection: {
            getStart: () => any;
            getContent: () => string;
            select: (...args: any[]) => void;
        };
        insertContent(data: any): void;
        execCommand(name: any, ui: any, args: any): void;
        dom: {
            createHTML(tag: any, attributes: any, innerText: any): {
                tag: any;
                attributes: any;
                innerText: any;
            };
            encode: <T = any>(x: T) => T;
        };
        focus: (...args: any[]) => void;
    };
    adder: (value: any) => () => void;
    assertEq: (label: any, expected: any) => void;
    sAssertEq: (label: any, expected: any) => Step<{}, {}>;
    sClear: Step<{}, {}>;
    sPrepareState: (node: any, content: any) => Step<{}, {}>;
};

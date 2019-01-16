import { Step } from '@ephox/agar';
import { ComponentApi } from '@ephox/alloy';
import { Element } from '@ephox/sugar';
export default function (): {
    component: () => ComponentApi.AlloyComponent;
    config: (...args: any[]) => {
        getFrame(): Element;
        onDomChanged(): {
            unbind: (...args: any[]) => void;
        };
    };
    editor: (...args: any[]) => {
        selection: {
            getStart(): any;
            getContent(): any;
            select: (...args: any[]) => void;
        };
        getBody(): any;
        insertContent: (data: any) => void;
        execCommand: (name: any, ui: any, args: any) => void;
        dom: {
            createHTML(tag: any, attributes: any, innerText: any): {
                tag: any;
                attributes: any;
                innerText: any;
            };
            encode: <T = any>(x: T) => T;
        };
        focus(): void;
    };
    adder: (value: any) => () => void;
    assertEq: (label: any, expected: any) => void;
    sAssertEq: (label: any, expected: any) => Step<{}, {}>;
    sWaitForEditorLoaded: Step<{}, {}>;
    sClear: Step<{}, {}>;
    sPrepareState: (node: any, content: any) => Step<{}, {}>;
};

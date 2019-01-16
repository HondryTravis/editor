import { HTMLElement } from '@ephox/dom-globals';
export default function (): {
    attach: (preventDuplicates?: any) => void;
    update: (html: any) => void;
    detach: () => void;
    get: () => HTMLElement;
};

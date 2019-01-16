import { HTMLElement } from '@ephox/dom-globals';
export default function (): {
    attach: (preventDuplicates?: boolean) => void;
    update: (html: string) => void;
    detach: () => void;
    get: () => HTMLElement;
};

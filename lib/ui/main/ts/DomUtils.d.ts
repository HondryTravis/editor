/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { DocumentFragment, HTMLElement } from '@ephox/dom-globals';
declare const funcs: {
    id(): string;
    create(name: any, attrs: any, children?: any): HTMLElement;
    createFragment(html: any): DocumentFragment;
    getWindowSize(): GeomRect;
    getSize(elm: any): {
        width: any;
        height: any;
    };
    getPos(elm: any, root?: any): {
        x: number;
        y: number;
    };
    getContainer(): any;
    getViewPort(win?: any): GeomRect;
    get(id: any): HTMLElement;
    addClass(elm: any, cls: any): void;
    removeClass(elm: any, cls: any): void;
    hasClass(elm: any, cls: any): any;
    toggleClass(elm: any, cls: any, state: any): void;
    css(elm: any, name: any, value?: any): void;
    getRuntimeStyle(elm: any, name: any): string;
    on(target: any, name: any, callback: any, scope?: any): any;
    off(target: any, name: any, callback: any): any;
    fire(target: any, name: any, args: any): any;
    innerHtml(elm: any, html: any): void;
};
export default funcs;

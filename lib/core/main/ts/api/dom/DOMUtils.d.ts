/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { StyleSheetLoader } from '../../dom/StyleSheetLoader';
import Schema from '../html/Schema';
import { StyleMap, Styles } from '../html/Styles';
import { GeomRect } from 'tinymce/core/api/geom/Rect';
import { HTMLElement, Node, Window, Document, Element, DocumentFragment, NamedNodeMap, Range } from '@ephox/dom-globals';
export interface DOMUtilsSettings {
    schema: Schema;
    url_converter: Function;
    url_converter_scope: any;
    ownEvents: boolean;
    proxy: any;
    keep_values: boolean;
    hex_colors: boolean;
    class_filter: Function;
    update_styles: boolean;
    root_element: HTMLElement;
    collect: Function;
    onSetAttrib: Function;
    contentCssCors: boolean;
}
export declare type Target = Node | Window | Array<Node | Window>;
export declare type RunArguments = string | Node | Array<string | Node>;
export interface DOMUtils {
    doc: Document;
    settings: Partial<DOMUtilsSettings>;
    win: Window;
    files: {};
    stdMode: boolean;
    boxModel: boolean;
    styleSheetLoader: StyleSheetLoader;
    boundEvents: any[];
    styles: Styles;
    schema: Schema;
    events: any;
    isBlock: (node: string | Node) => boolean;
    $: any;
    $$: (elm: string | Node | Node[]) => any;
    root: any;
    clone: (node: Node, deep: boolean) => Node;
    getRoot: () => HTMLElement;
    getViewPort: (argWin?: Window) => GeomRect;
    getRect: (elm: string | HTMLElement) => GeomRect;
    getSize: (elm: string | HTMLElement) => {
        w: number;
        h: number;
    };
    getParent: (node: string | Node, selector: string | Function, root?: Node) => Node;
    getParents: (elm: string | Node, selector: string | Function, root?: Node, collect?: boolean) => Node[];
    get: (elm: string | Node) => HTMLElement;
    getNext: (node: Node, selector: string | Function) => Node;
    getPrev: (node: Node, selector: string | Function) => Node;
    select: (selector: string, scope?: string | Element) => HTMLElement[];
    is: (elm: Node | Node[], selector: string) => boolean;
    add: (parentElm: RunArguments, name: string | Node, attrs?: Record<string, any>, html?: string | Node, create?: boolean) => HTMLElement;
    create: (name: string, attrs?: Record<string, any>, html?: string | Node) => HTMLElement;
    createHTML: (name: string, attrs?: Record<string, any>, html?: string) => string;
    createFragment: (html?: string) => DocumentFragment;
    remove: (node: string | Node | Node[], keepChildren?: boolean) => any;
    setStyle: (elm: string | Node, name: string | StyleMap, value: string | number | StyleMap) => void;
    getStyle: (elm: string | Node, name: string, computed?: boolean) => string;
    setStyles: (elm: string | Node, stylesArg: StyleMap) => void;
    removeAllAttribs: (e: RunArguments) => any;
    setAttrib: (elm: string | Node, name: string, value: string) => void;
    setAttribs: (elm: string | Node, attrs: Record<string, string>) => void;
    getAttrib: (elm: string | Node, name: string, defaultVal?: string) => string;
    getPos: (elm: string | Node, rootElm?: Node) => {
        x: number;
        y: number;
    };
    parseStyle: (cssText: string) => StyleMap;
    serializeStyle: (stylesArg: StyleMap, name?: string) => string;
    addStyle: (cssText: string) => void;
    loadCSS: (url: string) => void;
    addClass: (elm: string | Node | Node[], cls: string) => void;
    removeClass: (elm: string | Node | Node[], cls: string) => void;
    hasClass: (elm: string | Node, cls: string) => any;
    toggleClass: (elm: string | Node | Node[], cls: string, state: boolean) => void;
    show: (elm: string | Node) => void;
    hide: (elm: string | Node) => void;
    isHidden: (elm: string | Node) => boolean;
    uniqueId: (prefix?: string) => string;
    setHTML: (elm: string | Node, html: string) => void;
    getOuterHTML: (elm: string | Node) => string;
    setOuterHTML: (elm: string | Node, html: string) => void;
    decode: (text: string) => string;
    encode: (text: string) => string;
    insertAfter: (node: RunArguments, reference: string | Node) => any;
    replace: (newElm: Node, oldElm: RunArguments, keepChildren?: boolean) => any;
    rename: (elm: Node, name: string) => Node;
    findCommonAncestor: (a: Node, b: Node) => Node;
    toHex: (rgbVal: string) => string;
    run: (elm: RunArguments, func: (node: HTMLElement) => any, scope?: any) => any;
    getAttribs: (elm: string | Node) => NamedNodeMap | undefined[];
    isEmpty: (node: Node, elements?: Record<string, any>) => boolean;
    createRng: () => Range;
    nodeIndex: (node: Node, normalized?: boolean) => number;
    split: (parentElm: Node, splitElm: Node, replacementElm?: Node) => Node;
    bind: (target: Target, name: string, func: Function, scope?: any) => any;
    unbind: (target: Target, name?: string, func?: Function) => any;
    fire: (target: Target, name: string, evt?: any) => any;
    getContentEditable: (node: Node) => string;
    getContentEditableParent: (node: Node) => any;
    destroy: () => void;
    isChildOf: (node: Node, parent: Node) => boolean;
    dumpRng: (r: Range) => string;
}
/**
 * Constructs a new DOMUtils instance. Consult the Wiki for more details on settings etc for this class.
 *
 * @constructor
 * @method DOMUtils
 * @param {Document} doc Document reference to bind the utility class to.
 * @param {settings} settings Optional settings collection.
 */
export declare function DOMUtils(doc: Document, settings?: Partial<DOMUtilsSettings>): DOMUtils;
export declare namespace DOMUtils {
    /**
     * Instance of DOMUtils for the current document.
     *
     * @static
     * @property DOM
     * @type tinymce.dom.DOMUtils
     * @example
     * // Example of how to add a class to some element by id
     * tinymce.DOM.addClass('someid', 'someclass');
     */
    const DOM: DOMUtils;
    const nodeIndex: (node: Node, normalized?: boolean) => number;
}
export default DOMUtils;

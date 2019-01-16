/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Node from './Node';
export declare type ParserArgs = any;
export declare type ParserFilterCallback = (nodes: Node[], name: string, args: ParserArgs) => void;
export interface ParserFilter {
    name: string;
    callbacks: ParserFilterCallback[];
}
export default function (settings?: any, schema?: {
    children: {};
    elements: {};
    getValidStyles: () => import("./Schema").SchemaMap;
    getValidClasses: () => import("./Schema").SchemaMap;
    getBlockElements: () => import("./Schema").SchemaMap;
    getInvalidStyles: () => import("./Schema").SchemaMap;
    getShortEndedElements: () => import("./Schema").SchemaMap;
    getTextBlockElements: () => import("./Schema").SchemaMap;
    getTextInlineElements: () => import("./Schema").SchemaMap;
    getBoolAttrs: () => import("./Schema").SchemaMap;
    getElementRule: (name: string) => import("./Schema").ElementRule;
    getSelfClosingElements: () => import("./Schema").SchemaMap;
    getNonEmptyElements: () => import("./Schema").SchemaMap;
    getMoveCaretBeforeOnEnterElements: () => import("./Schema").SchemaMap;
    getWhiteSpaceElements: () => import("./Schema").SchemaMap;
    getSpecialElements: () => import("./Schema").SchemaRegExpMap;
    isValidChild: (name: string, child: string) => boolean;
    isValid: (name: string, attr?: string) => boolean;
    getCustomElements: () => import("./Schema").SchemaMap;
    addValidElements: (validElements: string) => void;
    setValidElements: (validElements: string) => void;
    addCustomElements: (customElements: string) => void;
    addValidChildren: (validChildren: any) => void;
}): {
    schema: {
        children: {};
        elements: {};
        getValidStyles: () => import("./Schema").SchemaMap;
        getValidClasses: () => import("./Schema").SchemaMap;
        getBlockElements: () => import("./Schema").SchemaMap;
        getInvalidStyles: () => import("./Schema").SchemaMap;
        getShortEndedElements: () => import("./Schema").SchemaMap;
        getTextBlockElements: () => import("./Schema").SchemaMap;
        getTextInlineElements: () => import("./Schema").SchemaMap;
        getBoolAttrs: () => import("./Schema").SchemaMap;
        getElementRule: (name: string) => import("./Schema").ElementRule;
        getSelfClosingElements: () => import("./Schema").SchemaMap;
        getNonEmptyElements: () => import("./Schema").SchemaMap;
        getMoveCaretBeforeOnEnterElements: () => import("./Schema").SchemaMap;
        getWhiteSpaceElements: () => import("./Schema").SchemaMap;
        getSpecialElements: () => import("./Schema").SchemaRegExpMap;
        isValidChild: (name: string, child: string) => boolean;
        isValid: (name: string, attr?: string) => boolean;
        getCustomElements: () => import("./Schema").SchemaMap;
        addValidElements: (validElements: string) => void;
        setValidElements: (validElements: string) => void;
        addCustomElements: (customElements: string) => void;
        addValidChildren: (validChildren: any) => void;
    };
    addAttributeFilter: (name: string, callback: (nodes: Node[], name: string, args: any) => void) => void;
    getAttributeFilters: () => ParserFilter[];
    addNodeFilter: (name: string, callback: (nodes: Node[], name: string, args: any) => void) => void;
    getNodeFilters: () => ParserFilter[];
    filterNode: (node: Node) => Node;
    parse: (html: string, args?: any) => Node;
};

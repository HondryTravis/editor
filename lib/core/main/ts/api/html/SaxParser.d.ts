/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Constructs a new SaxParser instance.
 *
 * @constructor
 * @method SaxParser
 * @param {Object} settings Name/value collection of settings. comment, cdata, text, start and end are callbacks.
 * @param {tinymce.html.Schema} schema HTML Schema class to use when parsing.
 */
export declare function SaxParser(settings: any, schema?: {
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
    parse: (html: string) => void;
};
export declare namespace SaxParser {
    const findEndTag: (schema: any, html: any, startIndex: any) => any;
}
export default SaxParser;

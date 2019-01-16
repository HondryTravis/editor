/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * This class contails various utility functions for the paste plugin.
 *
 * @class tinymce.pasteplugin.Utils
 */
declare function filter(content: any, items: any): any;
/**
 * Gets the innerText of the specified element. It will handle edge cases
 * and works better than textContent on Gecko.
 *
 * @param {String} html HTML string to get text from.
 * @return {String} String of text with line feeds.
 */
declare function innerText(html: string): string;
/**
 * Trims the specified HTML by removing all WebKit fragments, all elements wrapping the body trailing BR elements etc.
 *
 * @param {String} html Html string to trim contents on.
 * @return {String} Html contents that got trimmed.
 */
declare function trimHtml(html: string): string;
declare function createIdGenerator(prefix: string): () => string;
declare const _default: {
    filter: typeof filter;
    innerText: typeof innerText;
    trimHtml: typeof trimHtml;
    createIdGenerator: typeof createIdGenerator;
    isMsEdge: () => boolean;
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
export default function (settings?: any): {
    /**
     * Writes the a start element such as <p id="a">.
     *
     * @method start
     * @param {String} name Name of the element.
     * @param {Array} attrs Optional attribute array or undefined if it hasn't any.
     * @param {Boolean} empty Optional empty state if the tag should end like <br />.
     */
    start(name: string, attrs?: {
        [name: string]: string;
    }[], empty?: boolean): void;
    /**
     * Writes the a end element such as </p>.
     *
     * @method end
     * @param {String} name Name of the element.
     */
    end(name: string): void;
    /**
     * Writes a text node.
     *
     * @method text
     * @param {String} text String to write out.
     * @param {Boolean} raw Optional raw state if true the contents wont get encoded.
     */
    text(text: string, raw?: boolean): void;
    /**
     * Writes a cdata node such as <![CDATA[data]]>.
     *
     * @method cdata
     * @param {String} text String to write out inside the cdata.
     */
    cdata(text: string): void;
    /**
     * Writes a comment node such as <!-- Comment -->.
     *
     * @method cdata
     * @param {String} text String to write out inside the comment.
     */
    comment(text: string): void;
    /**
     * Writes a PI node such as <?xml attr="value" ?>.
     *
     * @method pi
     * @param {String} name Name of the pi.
     * @param {String} text String to write out inside the pi.
     */
    pi(name: string, text: string): void;
    /**
     * Writes a doctype node such as <!DOCTYPE data>.
     *
     * @method doctype
     * @param {String} text String to write out inside the doctype.
     */
    doctype(text: string): void;
    /**
     * Resets the internal buffer if one wants to reuse the writer.
     *
     * @method reset
     */
    reset(): void;
    /**
     * Returns the contents that got serialized.
     *
     * @method getContent
     * @return {String} HTML contents that got written down.
     */
    getContent(): string;
};

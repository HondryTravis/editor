/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
declare const _default: {
    /**
     * Sets the current language code.
     *
     * @method setCode
     * @param {String} newCode Current language code.
     */
    setCode(newCode: any): void;
    /**
     * Returns the current language code.
     *
     * @method getCode
     * @return {String} Current language code.
     */
    getCode(): string;
    /**
     * Property gets set to true if a RTL language pack was loaded.
     *
     * @property rtl
     * @type Boolean
     */
    rtl: boolean;
    /**
     * Adds translations for a specific language code.
     *
     * @method add
     * @param {String} code Language code like sv_SE.
     * @param {Array} items Name/value array with English en_US to sv_SE.
     */
    add(code: any, items: any): void;
    /**
     * Translates the specified text.
     *
     * It has a few formats:
     * I18n.translate("Text");
     * I18n.translate(["Text {0}/{1}", 0, 1]);
     * I18n.translate({raw: "Raw string"});
     *
     * @method translate
     * @param {String/Object/Array} text Text to translate.
     * @return {String} String that got translated.
     */
    translate(text: any): any;
    data: {};
};
export default _default;

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { HTMLElement, Node } from '@ephox/dom-globals';
interface ImageData {
    src: string;
    alt: string;
    title: string;
    width: string;
    height: string;
    class: string;
    style: string;
    caption: boolean;
    hspace: string;
    vspace: string;
    border: string;
    borderStyle: string;
}
declare type CssNormalizer = (css: string) => string;
declare const isFigure: (elm: Node) => boolean;
declare const isImage: (elm: Node) => boolean;
declare const defaultData: () => ImageData;
declare const getStyleValue: (normalizeCss: CssNormalizer, data: ImageData) => string;
declare const create: (normalizeCss: CssNormalizer, data: ImageData) => HTMLElement;
declare const read: (normalizeCss: CssNormalizer, image: HTMLElement) => ImageData;
declare const write: (normalizeCss: CssNormalizer, newData: ImageData, image: HTMLElement) => void;
export { ImageData, getStyleValue, defaultData, isFigure, isImage, create, read, write };

/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Editor } from 'tinymce/core/api/Editor';
import { DOMUtils } from 'tinymce/core/api/dom/DOMUtils';
import { Node } from '@ephox/dom-globals';
declare const _default: {
    createStyleForm: (editor: Editor) => {
        title: string;
        type: string;
        defaults: {
            onchange: (evt: any) => void;
        };
        items: ({
            label: string;
            name: string;
            type: string;
            onchange: (evt: any) => void;
            padding?: undefined;
            formItemDefaults?: undefined;
            defaults?: undefined;
            items?: undefined;
        } | {
            type: string;
            padding: number;
            formItemDefaults: {
                layout: string;
                alignH: string[];
            };
            defaults: {
                size: number;
            };
            items: ({
                label: string;
                type: string;
                name: string;
                width: number;
                onselect: (evt: any) => void;
                values: {
                    text: string;
                    value: string;
                }[];
                onaction?: undefined;
            } | {
                label: string;
                type: string;
                name: string;
                onaction: (evt: any) => any;
                width?: undefined;
                onselect?: undefined;
                values?: undefined;
            })[];
            label?: undefined;
            name?: undefined;
            onchange?: undefined;
        })[];
    };
    buildListItems: (inputList: any, itemCallback: any, startItems?: any) => any;
    updateStyleField: (editor: Editor, evt: any) => void;
    extractAdvancedStyles: (dom: DOMUtils, elm: any) => Node;
    updateAdvancedFields: (editor: Editor, evt: any) => void;
    syncAdvancedStyleFields: (editor: Editor, evt: any) => void;
};
export default _default;

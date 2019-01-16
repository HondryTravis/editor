/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import Settings from '../api/Settings';
import CodeSample from '../core/CodeSample';
import Languages from '../core/Languages';
export default {
    open: function (editor) {
        var minWidth = Settings.getDialogMinWidth(editor);
        var minHeight = Settings.getDialogMinHeight(editor);
        var currentLanguage = Languages.getCurrentLanguage(editor);
        var currentLanguages = Languages.getLanguages(editor);
        var currentCode = CodeSample.getCurrentCode(editor);
        editor.windowManager.open({
            title: 'Insert/Edit code sample',
            minWidth: minWidth,
            minHeight: minHeight,
            layout: 'flex',
            direction: 'column',
            align: 'stretch',
            body: [
                {
                    type: 'listbox',
                    name: 'language',
                    label: 'Language',
                    maxWidth: 200,
                    value: currentLanguage,
                    values: currentLanguages
                },
                {
                    type: 'textbox',
                    name: 'code',
                    multiline: true,
                    spellcheck: false,
                    ariaLabel: 'Code view',
                    flex: 1,
                    style: 'direction: ltr; text-align: left',
                    classes: 'monospace',
                    value: currentCode,
                    autofocus: true
                }
            ],
            onSubmit: function (e) {
                CodeSample.insertCodeSample(editor, e.data.language, e.data.code);
            }
        });
    }
};
//# sourceMappingURL=Dialog.js.map
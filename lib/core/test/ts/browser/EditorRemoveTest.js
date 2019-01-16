import { Chain, Logger, Pipeline, RawAssertions } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock';
import { Editor as McEditor } from '@ephox/mcagar';
import { Editor } from 'tinymce/core/api/Editor';
import EditorManager from 'tinymce/core/api/EditorManager';
import Theme from 'tinymce/themes/modern/Theme';
UnitTest.asynctest('browser.tinymce.core.EditorRemoveTest', function (success, failure) {
    Theme();
    var settings = {
        skin_url: '/project/js/tinymce/skins/lightgray'
    };
    var cAssertTextareaDisplayStyle = function (expected) { return Chain.op(function (editor) {
        var textareaElement = editor.getElement();
        RawAssertions.assertEq('element does not have the expected style', expected, textareaElement.style.display);
    }); };
    var cCreateEditor = Chain.mapper(function () { return new Editor('editor', {}, EditorManager); });
    var cRemoveEditor = Chain.op(function (editor) { return editor.remove(); });
    Pipeline.async({}, [
        Logger.t('remove editor without initializing it', Chain.asStep({}, [
            cCreateEditor,
            cRemoveEditor,
        ])),
        Logger.t('remove editor where the body has been removed', Chain.asStep({}, [
            McEditor.cFromHtml('<textarea></textarea>', settings),
            Chain.mapper(function (value) {
                var body = value.getBody();
                body.parentNode.removeChild(body);
                return value;
            }),
            McEditor.cRemove
        ])),
        Logger.t('init editor with no display style', Chain.asStep({}, [
            McEditor.cFromHtml('<textarea id="tinymce"></textarea>', settings),
            cAssertTextareaDisplayStyle('none'),
            cRemoveEditor,
            cAssertTextareaDisplayStyle(''),
            Chain.op(function (editor) { return EditorManager.init({ selector: '#tinymce' }); }),
            cAssertTextareaDisplayStyle(''),
            McEditor.cRemove
        ])),
        Logger.t('init editor with display: none', Chain.asStep({}, [
            McEditor.cFromHtml('<textarea id="tinymce" style="display: none;"></textarea>', settings),
            cAssertTextareaDisplayStyle('none'),
            cRemoveEditor,
            cAssertTextareaDisplayStyle('none'),
            Chain.op(function (editor) { return EditorManager.init({ selector: '#tinymce' }); }),
            cAssertTextareaDisplayStyle('none'),
            McEditor.cRemove
        ])),
        Logger.t('init editor with display: block', Chain.asStep({}, [
            McEditor.cFromHtml('<textarea id="tinymce" style="display: block;"></textarea>', settings),
            cAssertTextareaDisplayStyle('none'),
            cRemoveEditor,
            cAssertTextareaDisplayStyle('block'),
            Chain.op(function (editor) { return EditorManager.init({ selector: '#tinymce' }); }),
            cAssertTextareaDisplayStyle('block'),
            McEditor.cRemove
        ]))
    ], function () {
        success();
    }, failure);
});
//# sourceMappingURL=EditorRemoveTest.js.map
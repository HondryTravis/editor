import { Pipeline, Logger, Chain, UiFinder } from '@ephox/agar';
import Theme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
import { Editor as McEditor, ApiChains } from '@ephox/mcagar';
import { Body } from '@ephox/sugar';
UnitTest.asynctest('browser.tinymce.core.InlineEditorSaveTest', function (success, failure) {
    Theme();
    var settings = {
        inline: true,
        skin_url: '/project/js/tinymce/skins/lightgray'
    };
    var cAssertBogusExist = Chain.async(function (val, next, die) {
        UiFinder.findIn(Body.body(), '[data-mce-bogus]').fold(function () {
            die('Should be data-mce-bogus tags present');
        }, function () {
            next(val);
        });
    });
    var cSaveEditor = Chain.op(function (editor) { return editor.save(); });
    Pipeline.async({}, [
        Logger.t('Saving inline editor should not remove data-mce-bogus tags', Chain.asStep({}, [
            McEditor.cFromHtml('<div></div>', settings),
            ApiChains.cSetRawContent('<p data-mce-bogus="all">b</p><p data-mce-bogus="1">b</p>'),
            cSaveEditor,
            cAssertBogusExist,
            McEditor.cRemove,
        ]))
    ], function () {
        success();
    }, failure);
});
//# sourceMappingURL=InlineEditorSaveTest.js.map
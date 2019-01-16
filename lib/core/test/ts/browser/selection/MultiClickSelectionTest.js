import { Logger, Pipeline, Step, GeneralSteps } from '@ephox/agar';
import { TinyLoader, TinyApis } from '@ephox/mcagar';
import ModernTheme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
UnitTest.asynctest('browser.tinymce.core.selection.MultiClickSelectionTest', function (success, failure) {
    ModernTheme();
    var sFakeMultiClick = function (editor, clickCount) {
        return Step.sync(function () {
            editor.fire('click', { detail: clickCount });
        });
    };
    TinyLoader.setup(function (editor, onSuccess, onFailure) {
        var tinyApis = TinyApis(editor);
        var testXClicksNormalisation = function (clickCount) { return GeneralSteps.sequence([
            Logger.t('Normalize selection from index text node to text node offsets with ' + clickCount + ' clicks', GeneralSteps.sequence([
                tinyApis.sSetContent('<p>abc</p>'),
                tinyApis.sSetSelection([0], 0, [0], 1),
                sFakeMultiClick(editor, clickCount),
                tinyApis.sAssertSelection([0, 0], 0, [0, 0], 3)
            ])),
            Logger.t('Normalize selection start in text node end after paragraph with ' + clickCount + ' clicks', GeneralSteps.sequence([
                tinyApis.sSetContent('<p>abc</p>'),
                tinyApis.sSetSelection([0, 0], 0, [], 1),
                sFakeMultiClick(editor, clickCount),
                tinyApis.sAssertSelection([0, 0], 0, [0, 0], 3)
            ]))
        ]); };
        Pipeline.async({}, [
            tinyApis.sFocus,
            testXClicksNormalisation(3),
            testXClicksNormalisation(4),
            testXClicksNormalisation(5),
            testXClicksNormalisation(6),
            testXClicksNormalisation(7),
            testXClicksNormalisation(8),
            testXClicksNormalisation(9),
            testXClicksNormalisation(10)
        ], onSuccess, onFailure);
    }, {
        plugins: '',
        toolbar: '',
        skin_url: '/project/js/tinymce/skins/lightgray'
    }, function () {
        success();
    }, failure);
});
//# sourceMappingURL=MultiClickSelectionTest.js.map
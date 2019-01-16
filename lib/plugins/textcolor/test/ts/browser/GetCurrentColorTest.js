import { GeneralSteps, Logger, Pipeline, RawAssertions, Step } from '@ephox/agar';
import { TinyApis, TinyLoader } from '@ephox/mcagar';
import TextcolorPlugin from 'tinymce/plugins/textcolor/Plugin';
import ModernTheme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
import { PlatformDetection } from '@ephox/sand';
import TextColor from '../../../main/ts/core/TextColor';
UnitTest.asynctest('browser.tinymce.plugins.textcolor.GetCurrentColorTest', function (success, failure) {
    var browser = PlatformDetection.detect().browser;
    ModernTheme();
    TextcolorPlugin();
    var sAssertCurrentColor = function (editor, format, label, expected) { return Step.sync(function () {
        var actual = TextColor.getCurrentColor(editor, format);
        RawAssertions.assertEq(label, expected, actual);
    }); };
    TinyLoader.setup(function (editor, onSuccess, onFailure) {
        var tinyApis = TinyApis(editor);
        Pipeline.async({}, browser.isIE() ? [] : [
            Logger.t('getCurrentColor should return the first found forecolor, not the parent color', GeneralSteps.sequence([
                tinyApis.sFocus,
                tinyApis.sSetContent('<p style="color: blue;">hello <span style="color: red;">world</span></p>'),
                tinyApis.sSetSelection([0, 1, 0], 2, [0, 1, 0], 2),
                sAssertCurrentColor(editor, 'forecolor', 'should return red', 'red')
            ])),
            Logger.t('getCurrentColor should return the first found backcolor, not the parent color', GeneralSteps.sequence([
                tinyApis.sFocus,
                tinyApis.sSetContent('<p style="background-color: red;">hello <span style="background-color: blue;">world</span></p>'),
                tinyApis.sSetSelection([0, 1, 0], 2, [0, 1, 0], 2),
                sAssertCurrentColor(editor, 'backcolor', 'should return blue', 'blue')
            ]))
        ], onSuccess, onFailure);
    }, {
        plugins: 'textcolor',
        toolbar: 'forecolor backcolor',
        skin_url: '/project/js/tinymce/skins/lightgray'
    }, success, failure);
});
//# sourceMappingURL=GetCurrentColorTest.js.map
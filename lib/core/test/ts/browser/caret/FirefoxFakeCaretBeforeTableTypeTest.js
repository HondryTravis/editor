import { GeneralSteps, Logger, Pipeline, Step, RawAssertions } from '@ephox/agar';
import { TinyApis, TinyLoader } from '@ephox/mcagar';
import Theme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
import Plugin from 'tinymce/plugins/table/Plugin';
import KeyUtils from '../../module/test/KeyUtils';
import Env from 'tinymce/core/api/Env';
var sAssertUndoManagerDataLength = function (editor, expected) {
    return Step.sync(function () { return RawAssertions.assertEq('should have correct length', expected, editor.undoManager.data.length); });
};
UnitTest.asynctest('browser.tinymce.core.FirefoxFakeCaretBeforeTableTypeTest', function (success, failure) {
    Theme();
    Plugin();
    TinyLoader.setup(function (editor, onSuccess, onFailure) {
        var tinyApis = TinyApis(editor);
        Pipeline.async({}, Env.gecko ? [
            Logger.t('cursor before table type', GeneralSteps.sequence([
                tinyApis.sSetContent('<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 50%;">&nbsp;</td><td style="width: 50%;">&nbsp;</td></tr><tr><td style="width: 50%;">&nbsp;</td><td style="width: 50%;">&nbsp;</td></tr></tbody></table>'),
                tinyApis.sSetCursor([], 0),
                sAssertUndoManagerDataLength(editor, 1),
                Step.sync(function () { return KeyUtils.type(editor, 'a'); }),
                sAssertUndoManagerDataLength(editor, 3)
            ]))
        ] : [], onSuccess, onFailure);
    }, {
        skin_url: '/project/js/tinymce/skins/lightgray',
        plugins: 'table'
    }, success, failure);
});
//# sourceMappingURL=FirefoxFakeCaretBeforeTableTypeTest.js.map
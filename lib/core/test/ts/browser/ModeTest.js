import { Assertions, GeneralSteps, Logger, Pipeline, Step } from '@ephox/agar';
import { TinyLoader } from '@ephox/mcagar';
import Theme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
import { getMode, setMode } from 'tinymce/core/Mode';
import { Class, Element } from '@ephox/sugar';
UnitTest.asynctest('browser.tinymce.core.ModeTest', function (success, failure) {
    Theme();
    var sAssertMode = function (editor, expectedMode) {
        return Step.sync(function () {
            Assertions.assertEq('Should be the expected mode', expectedMode, getMode(editor));
        });
    };
    var sAssertBodyClass = function (editor, cls, state) {
        return Step.sync(function () {
            Assertions.assertEq('Should be the expected class state', state, Class.has(Element.fromDom(editor.getBody()), cls));
        });
    };
    var sSetMode = function (editor, mode) {
        return Step.sync(function () {
            setMode(editor, mode);
        });
    };
    TinyLoader.setup(function (editor, onSuccess, onFailure) {
        Pipeline.async({}, [
            Logger.t('Should toggle readonly on/off and have a readonly class', GeneralSteps.sequence([
                sAssertMode(editor, "readonly" /* ReadOnly */),
                sAssertBodyClass(editor, 'mce-content-readonly', true),
                sSetMode(editor, "design" /* Design */),
                sAssertMode(editor, "design" /* Design */),
                sAssertBodyClass(editor, 'mce-content-readonly', false),
                sSetMode(editor, "readonly" /* ReadOnly */),
                sAssertMode(editor, "readonly" /* ReadOnly */),
                sAssertBodyClass(editor, 'mce-content-readonly', true)
            ]))
        ], onSuccess, onFailure);
    }, {
        skin_url: '/project/js/tinymce/skins/lightgray',
        readonly: true
    }, success, failure);
});
//# sourceMappingURL=ModeTest.js.map
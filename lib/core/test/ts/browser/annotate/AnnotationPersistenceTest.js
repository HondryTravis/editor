import { Assertions, Chain, GeneralSteps, Logger, Pipeline, Step } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock';
import { TinyApis, TinyLoader } from '@ephox/mcagar';
import ModernTheme from 'tinymce/themes/modern/Theme';
import { sAnnotate } from '../../module/test/AnnotationAsserts';
UnitTest.asynctest('browser.tinymce.core.annotate.AnnotationPersistenceTest', function (success, failure) {
    ModernTheme();
    var sUndoLevel = function (editor) { return Step.sync(function () {
        editor.undoManager.add();
    }); };
    var sRunTinyWithSettings = function (annotation, getSteps) { return Step.async(function (next, die) {
        var settings = {
            skin_url: '/project/js/tinymce/skins/lightgray',
            setup: function (ed) {
                ed.on('init', function () {
                    ed.annotator.register('test-annotation', annotation);
                });
            }
        };
        TinyLoader.setup(function (editor, onSuccess, onFailure) {
            var tinyApis = TinyApis(editor);
            Pipeline.async({}, getSteps(tinyApis, editor), onSuccess, onFailure);
        }, settings, next, die);
    }); };
    var settingsWithPersistence = {
        persistent: true,
        decorate: function (uid, data) {
            return {
                attributes: {
                    'data-test-anything': data.anything
                },
                classes: []
            };
        }
    };
    var settingsWithDefaultPersistence = {
        decorate: function (uid, data) {
            return {
                attributes: {
                    'data-test-anything': data.anything
                },
                classes: []
            };
        }
    };
    var settingsWithoutPersistence = {
        persistent: false,
        decorate: function (uid, data) {
            return {
                attributes: {
                    'data-test-anything': data.anything
                },
                classes: []
            };
        }
    };
    var sSetupSingleAnnotation = function (tinyApis, editor) { return GeneralSteps.sequence([
        // '<p>This is the only p|ar|agraph</p>'
        tinyApis.sSetContent('<p>This is the only paragraph <em>here</em></p>'),
        sUndoLevel(editor),
        tinyApis.sSetSelection([0, 0], 'This is the only p'.length, [0, 0], 'This is the only par'.length),
        sAnnotate(editor, 'test-annotation', 'test-uid', { anything: 'one-paragraph' }),
        tinyApis.sAssertContentPresence({
            '.mce-annotation': 1,
            'p:contains("This is the only paragraph here")': 1
        }),
        Step.sync(function () {
            editor.execCommand('undo');
        }),
        tinyApis.sAssertContentPresence({
            '.mce-annotation': 0,
            'p:contains("This is the only paragraph here")': 1
        }),
        Step.sync(function () {
            editor.execCommand('redo');
        }),
        tinyApis.sAssertContentPresence({
            '.mce-annotation': 1,
            'p:contains("This is the only paragraph here")': 1
        })
    ]); };
    var sContentContains = function (tinyApis, ed, pattern, isContained) {
        return Chain.asStep({}, [
            Chain.mapper(function () { return ed.getContent(); }),
            Chain.op(function (content) {
                Assertions.assertEq('editor.getContent() should contain: ' + pattern + ' = ' + isContained, true, content.indexOf(pattern) > -1 === isContained);
            })
        ]);
    };
    Pipeline.async({}, [
        Logger.t('Testing configuration with persistence', sRunTinyWithSettings(settingsWithPersistence, function (tinyApis, ed) { return [
            sSetupSingleAnnotation(tinyApis, ed),
            sContentContains(tinyApis, ed, 'mce-annotation', true)
        ]; })),
        Logger.t('Testing configuration with *no* persistence', sRunTinyWithSettings(settingsWithoutPersistence, function (tinyApis, ed) { return [
            sSetupSingleAnnotation(tinyApis, ed),
            sContentContains(tinyApis, ed, 'mce-annotation', false)
        ]; })),
        Logger.t('Testing configuration with default persistence', sRunTinyWithSettings(settingsWithDefaultPersistence, function (tinyApis, ed) { return [
            sSetupSingleAnnotation(tinyApis, ed),
            sContentContains(tinyApis, ed, 'mce-annotation', true)
        ]; })),
    ], function () { return success(); }, failure);
});
//# sourceMappingURL=AnnotationPersistenceTest.js.map
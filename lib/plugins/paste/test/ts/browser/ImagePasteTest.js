import { Pipeline, Step } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock';
import { Arr, Cell } from '@ephox/katamari';
import { LegacyUnit, TinyLoader } from '@ephox/mcagar';
import { Blob, Uint8Array, Window } from '@ephox/sand';
import Delay from 'tinymce/core/api/util/Delay';
import Promise from 'tinymce/core/api/util/Promise';
import { Clipboard } from 'tinymce/plugins/paste/api/Clipboard';
import Plugin from 'tinymce/plugins/paste/Plugin';
import Theme from 'tinymce/themes/modern/Theme';
UnitTest.asynctest('tinymce.plugins.paste.browser.ImagePasteTest', function () {
    var success = arguments[arguments.length - 2];
    var failure = arguments[arguments.length - 1];
    var suite = LegacyUnit.createSuite();
    Plugin();
    Theme();
    var base64ImgSrc = [
        'R0lGODdhZABkAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAZABkAIEAAAD78jY/',
        'P3SsMjIC/4SPqcvtD6OctNqLs968+w+G4kiW5ommR8C27gvHrxrK9g3TIM7f+tcL5n4doZFFLB6F',
        'Sc6SCRFIp9SqVTp6BiPXbjer5XG95Ck47IuWy2e0bLz2tt3DR5w8p7vgd2tej6TW5ycCGMM3aFZo',
        'OCOYqFjDuOf4KPAHiPh4qZeZuEnXOfjpFto3ilZ6dxqWGreq1br2+hTLtigZaFcJuYOb67DLC+Qb',
        'UIt3i2sshyzZtEFc7JwBLT1NXI2drb3N3e39DR4uPk5ebn6Onq6+zu488A4fLz9P335Aj58fb2+g',
        '71/P759AePwADBxY8KDAhAr9MWyY7yFEgPYmRgxokWK7jEYa2XGcJ/HjgJAfSXI0mRGlRZUTWUJ0',
        '2RCmQpkHaSLEKPKdzYU4c+78VzCo0KFEixo9ijSp0qVMmzp9CjWq1KlUq1q9eqEAADs='
    ].join('');
    var base64ImgSrc2 = [
        'R0lGODlhAQABAPAAAP8REf///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
    ].join('');
    var sTeardown = function (editor) {
        return Step.sync(function () {
            delete editor.settings.paste_data_images;
            delete editor.settings.images_dataimg_filter;
            editor.editorUpload.destroy();
        });
    };
    var appendTeardown = function (editor, steps) {
        return Arr.bind(steps, function (step) {
            return [step, sTeardown(editor)];
        });
    };
    var base64ToBlob = function (base64, type) {
        var buff = Window.atob(base64);
        var bytes = Uint8Array(buff.length);
        for (var i = 0; i < bytes.length; i++) {
            bytes[i] = buff.charCodeAt(i);
        }
        return Blob([bytes], { type: type });
    };
    var noop = function () {
    };
    var mockEvent = function (type, files) {
        var event, transferName;
        event = {
            type: type,
            preventDefault: noop
        };
        transferName = type === 'drop' ? 'dataTransfer' : 'clipboardData';
        event[transferName] = {
            files: files
        };
        return event;
    };
    var setupContent = function (editor) {
        editor.setContent('<p>a</p>');
        LegacyUnit.setSelection(editor, 'p', 0);
        return editor.selection.getRng();
    };
    var waitFor = function (predicate) {
        return new Promise(function (resolve, reject) {
            var check = function (time, count) {
                if (predicate()) {
                    resolve();
                }
                else {
                    if (count === 0) {
                        reject(new Error('Waited for predicate to be true'));
                    }
                    else {
                        Delay.setTimeout(function () {
                            check(time, count - 1);
                        }, time);
                    }
                }
            };
            check(10, 100);
        });
    };
    var waitForSelector = function (editor, selector) {
        return waitFor(function () { return editor.dom.select(selector).length > 0; });
    };
    suite.asyncTest('pasteImages should set unique id in blobcache', function (editor, done, die) {
        var rng, event;
        var clipboard = Clipboard(editor, Cell('html'));
        var hasCachedItem = function (name) { return !!editor.editorUpload.blobCache.get(name); };
        editor.settings.paste_data_images = true;
        rng = setupContent(editor);
        event = mockEvent('paste', [
            base64ToBlob(base64ImgSrc, 'image/gif'),
            base64ToBlob(base64ImgSrc2, 'image/gif')
        ]);
        clipboard.pasteImageData(event, rng);
        waitForSelector(editor, 'img').then(function () {
            waitFor(function (editor) { return hasCachedItem('mceclip0') && hasCachedItem('mceclip1'); }).then(function () {
                var cachedBlob1 = editor.editorUpload.blobCache.get('mceclip0');
                var cachedBlob2 = editor.editorUpload.blobCache.get('mceclip1');
                LegacyUnit.equal(base64ImgSrc, cachedBlob1.base64());
                LegacyUnit.equal(base64ImgSrc2, cachedBlob2.base64());
                done();
            }).catch(die);
        }).catch(die);
    });
    suite.asyncTest('dropImages', function (editor, done, die) {
        var rng, event;
        var clipboard = Clipboard(editor, Cell('html'));
        editor.settings.paste_data_images = true;
        rng = setupContent(editor);
        event = mockEvent('drop', [
            base64ToBlob(base64ImgSrc, 'image/gif')
        ]);
        clipboard.pasteImageData(event, rng);
        waitForSelector(editor, 'img').then(function () {
            LegacyUnit.equal(editor.getContent(), '<p><img src=\"data:image/gif;base64,' + base64ImgSrc + '" />a</p>');
            LegacyUnit.strictEqual(editor.dom.select('img')[0].src.indexOf('blob:'), 0);
            done();
        }).catch(die);
    });
    suite.asyncTest('pasteImages', function (editor, done, die) {
        var rng, event;
        var clipboard = Clipboard(editor, Cell('html'));
        editor.settings.paste_data_images = true;
        rng = setupContent(editor);
        event = mockEvent('paste', [
            base64ToBlob(base64ImgSrc, 'image/gif')
        ]);
        clipboard.pasteImageData(event, rng);
        waitForSelector(editor, 'img').then(function () {
            LegacyUnit.equal(editor.getContent(), '<p><img src=\"data:image/gif;base64,' + base64ImgSrc + '" />a</p>');
            LegacyUnit.strictEqual(editor.dom.select('img')[0].src.indexOf('blob:'), 0);
            done();
        }).catch(die);
    });
    suite.asyncTest('dropImages - images_dataimg_filter', function (editor, done, die) {
        var rng, event;
        var clipboard = Clipboard(editor, Cell('html'));
        editor.settings.paste_data_images = true;
        editor.settings.images_dataimg_filter = function (img) {
            LegacyUnit.strictEqual(img.src, 'data:image/gif;base64,' + base64ImgSrc);
            return false;
        };
        rng = setupContent(editor);
        event = mockEvent('drop', [
            base64ToBlob(base64ImgSrc, 'image/gif')
        ]);
        clipboard.pasteImageData(event, rng);
        waitForSelector(editor, 'img').then(function () {
            LegacyUnit.equal(editor.getContent(), '<p><img src=\"data:image/gif;base64,' + base64ImgSrc + '" />a</p>');
            LegacyUnit.strictEqual(editor.dom.select('img')[0].src.indexOf('data:'), 0);
            done();
        }).catch(die);
    });
    suite.asyncTest('pasteImages - images_dataimg_filter', function (editor, done, die) {
        var rng, event;
        var clipboard = Clipboard(editor, Cell('html'));
        editor.settings.paste_data_images = true;
        editor.settings.images_dataimg_filter = function (img) {
            LegacyUnit.strictEqual(img.src, 'data:image/gif;base64,' + base64ImgSrc);
            return false;
        };
        rng = setupContent(editor);
        event = mockEvent('paste', [
            base64ToBlob(base64ImgSrc, 'image/gif')
        ]);
        clipboard.pasteImageData(event, rng);
        waitForSelector(editor, 'img').then(function () {
            LegacyUnit.equal(editor.getContent(), '<p><img src=\"data:image/gif;base64,' + base64ImgSrc + '" />a</p>');
            LegacyUnit.strictEqual(editor.dom.select('img')[0].src.indexOf('data:'), 0);
            done();
        }).catch(die);
    });
    TinyLoader.setup(function (editor, onSuccess, onFailure) {
        Pipeline.async({}, appendTeardown(editor, suite.toSteps(editor)), onSuccess, onFailure);
    }, {
        add_unload_trigger: false,
        disable_nodechange: true,
        entities: 'raw',
        indent: false,
        automatic_uploads: false,
        plugins: 'paste',
        skin_url: '/project/js/tinymce/skins/lightgray'
    }, success, failure);
});
//# sourceMappingURL=ImagePasteTest.js.map
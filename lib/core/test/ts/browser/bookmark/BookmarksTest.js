import { Assertions, Logger, Pipeline, NamedChain, Chain, RawAssertions } from '@ephox/agar';
import { Editor, ApiChains } from '@ephox/mcagar';
import Theme from 'tinymce/themes/modern/Theme';
import { UnitTest } from '@ephox/bedrock';
import GetBookmark from 'tinymce/core/bookmark/GetBookmark';
import { Hierarchy, Element, Remove, Html, SelectorFilter, Replication } from '@ephox/sugar';
import { Result, Arr } from '@ephox/katamari';
import { isRangeBookmark, isPathBookmark, isIdBookmark, isIndexBookmark, isStringPathBookmark } from 'tinymce/core/bookmark/BookmarkTypes';
import ResolveBookmark from 'tinymce/core/bookmark/ResolveBookmark';
UnitTest.asynctest('browser.tinymce.core.bookmark.BookmarksTest', function (success, failure) {
    Theme();
    var cGetBookmark = function (type, normalized) {
        return NamedChain.direct('editor', Chain.mapper(function (editor) { return GetBookmark.getBookmark(editor.selection, type, normalized); }), 'bookmark');
    };
    var cGetFilledPersistentBookmark = function (type, normalized) {
        return NamedChain.direct('editor', Chain.mapper(function (editor) { return GetBookmark.getPersistentBookmark(editor.selection, true); }), 'bookmark');
    };
    var assertRawRange = function (element, rng, startPath, startOffset, endPath, endOffset) {
        var startContainer = Hierarchy.follow(element, startPath).getOrDie();
        var endContainer = Hierarchy.follow(element, endPath).getOrDie();
        Assertions.assertDomEq('Should be expected start container', startContainer, Element.fromDom(rng.startContainer));
        Assertions.assertEq('Should be expected start offset', startOffset, rng.startOffset);
        Assertions.assertDomEq('Should be expected end container', endContainer, Element.fromDom(rng.endContainer));
        Assertions.assertEq('Should be expected end offset', endOffset, rng.endOffset);
    };
    var cBundleOp = function (f) {
        return NamedChain.bundle(function (input) {
            f(input);
            return Result.value(input);
        });
    };
    var cCreateNamedEditor = NamedChain.write('editor', Editor.cFromSettings({
        skin_url: '/project/js/tinymce/skins/lightgray'
    }));
    var cSetupEditor = function (content, startPath, startOffset, endPath, endOffset) {
        return NamedChain.read('editor', Chain.fromChains([
            ApiChains.cSetContent(content),
            ApiChains.cSetSelection(startPath, startOffset, endPath, endOffset)
        ]));
    };
    var cRemoveEditor = NamedChain.read('editor', Editor.cRemove);
    var cSetCursor = function (path, offset) { return NamedChain.read('editor', ApiChains.cSetCursor(path, offset)); };
    var cResolveBookmark = cBundleOp(function (input) {
        var rng = ResolveBookmark.resolve(input.editor.selection, input.bookmark).getOrDie('Should be resolved');
        input.editor.selection.setRng(rng);
    });
    var cAssertSelection = function (spath, soffset, fpath, foffset) { return NamedChain.read('editor', ApiChains.cAssertSelection(spath, soffset, fpath, foffset)); };
    var sBookmarkTest = function (namedChains) {
        return Chain.asStep({}, [
            NamedChain.asChain(Arr.flatten([
                [cCreateNamedEditor],
                namedChains,
                [cRemoveEditor]
            ]))
        ]);
    };
    var cAssertRangeBookmark = function (spath, soffset, fpath, foffset) { return cBundleOp(function (input) {
        RawAssertions.assertEq('Should be a range bookmark', true, isRangeBookmark(input.bookmark));
        assertRawRange(Element.fromDom(input.editor.getBody()), input.bookmark.rng, spath, soffset, fpath, foffset);
    }); };
    var cAssertPathBookmark = function (expectedStart, expectedEnd) { return cBundleOp(function (input) {
        RawAssertions.assertEq('Should be a path bookmark', true, isPathBookmark(input.bookmark));
        RawAssertions.assertEq('Should be expected start path', expectedStart, input.bookmark.start);
        RawAssertions.assertEq('Should be expected end path', expectedEnd, input.bookmark.end);
    }); };
    var cAssertIndexBookmark = function (expectedName, expectedIndex) { return cBundleOp(function (input) {
        RawAssertions.assertEq('Should be an index bookmark', true, isIndexBookmark(input.bookmark));
        RawAssertions.assertEq('Should be expected name', expectedName, input.bookmark.name);
        RawAssertions.assertEq('Should be expected index', expectedIndex, input.bookmark.index);
    }); };
    var cAssertStringPathBookmark = function (expectedStart, expectedEnd) { return cBundleOp(function (input) {
        RawAssertions.assertEq('Should be a string bookmark', true, isStringPathBookmark(input.bookmark));
        RawAssertions.assertEq('Should be expected start', expectedStart, input.bookmark.start);
        RawAssertions.assertEq('Should be expected end', expectedEnd, input.bookmark.end);
    }); };
    var cAssertIdBookmark = cBundleOp(function (input) {
        RawAssertions.assertEq('Should be an id bookmark', true, isIdBookmark(input.bookmark));
    });
    var cAssertApproxRawContent = function (expectedHtml) { return NamedChain.read('editor', Chain.op(function (editor) {
        var elm = Replication.deep(Element.fromDom(editor.getBody()));
        Arr.each(SelectorFilter.descendants(elm, '*[data-mce-bogus="all"]'), Remove.remove);
        var actualHtml = Html.get(elm);
        Assertions.assertHtmlStructure('Should expected structure', "<body>" + expectedHtml + "</body>", "<body>" + actualHtml + "</body>");
    })); };
    Pipeline.async({}, [
        Logger.t('Range bookmark', sBookmarkTest([
            cSetupEditor('<p>a</p>', [0, 0], 0, [0, 0], 1),
            cGetBookmark(1, false),
            cAssertRangeBookmark([0, 0], 0, [0, 0], 1),
            cSetCursor([0, 0], 0),
            cResolveBookmark,
            cAssertSelection([0, 0], 0, [0, 0], 1)
        ])),
        Logger.t('Get path bookmark', sBookmarkTest([
            cSetupEditor('<p>a</p>', [0, 0], 0, [0, 0], 1),
            cGetBookmark(2, false),
            cAssertPathBookmark([0, 0, 0], [1, 0, 0]),
            cSetCursor([0, 0], 0),
            cResolveBookmark,
            cAssertSelection([0, 0], 0, [0, 0], 1)
        ])),
        Logger.t('Get id bookmark', sBookmarkTest([
            cSetupEditor('<p><img src="about:blank"></p>', [0], 0, [0], 1),
            cGetBookmark(2, false),
            cAssertIndexBookmark('IMG', 0),
            cSetCursor([0, 0], 0),
            cResolveBookmark,
            cAssertSelection([0], 0, [0], 1)
        ])),
        Logger.t('Get string path bookmark', sBookmarkTest([
            cSetupEditor('<p>a</p>', [0, 0], 0, [0, 0], 1),
            cGetBookmark(3, false),
            cAssertStringPathBookmark('p[0]/text()[0],0', 'p[0]/text()[0],1'),
            cSetCursor([0, 0], 0),
            cResolveBookmark,
            cAssertSelection([0, 0], 0, [0, 0], 1)
        ])),
        Logger.t('Get persistent bookmark on element indexes', sBookmarkTest([
            cSetupEditor('<p><img src="about:blank"></p>', [0], 0, [0], 1),
            cGetBookmark(0, false),
            cAssertApproxRawContent('<p><img src="about:blank"></p>'),
            cAssertIndexBookmark('IMG', 0),
            cSetCursor([0, 0], 0),
            cResolveBookmark,
            cAssertApproxRawContent('<p><img src="about:blank"></p>'),
            cAssertSelection([0], 0, [0], 1)
        ])),
        Logger.t('Get persistent bookmark marker spans on text offsets', sBookmarkTest([
            cSetupEditor('<p>abc</p>', [0, 0], 1, [0, 0], 2),
            cGetBookmark(0, false),
            cAssertApproxRawContent('<p>a<span data-mce-type="bookmark" id="mce_1_start"></span>b<span id="mce_1_end"></span>c</p>'),
            cAssertSelection([0, 2], 0, [0, 2], 1),
            cAssertIdBookmark,
            cSetCursor([0, 1], 0),
            cResolveBookmark,
            cAssertApproxRawContent('<p>abc</p>'),
            cAssertSelection([0, 0], 1, [0, 0], 2)
        ])),
        Logger.t('Get persistent bookmark marker spans on element indexes', sBookmarkTest([
            cSetupEditor('<p><input><input></p>', [0], 0, [0], 2),
            cGetBookmark(0, false),
            cAssertApproxRawContent('<p><span data-mce-type="bookmark" id="mce_1_start"></span><input><input><span id="mce_1_end"></span></p>'),
            cAssertSelection([0], 1, [0], 3),
            cAssertIdBookmark,
            cSetCursor([0], 2),
            cResolveBookmark,
            cAssertApproxRawContent('<p><input><input></p>'),
            cAssertSelection([0], 0, [0], 2)
        ])),
        Logger.t('Get persistent bookmark filled with marker spans on text offsets', sBookmarkTest([
            cSetupEditor('<p>abc</p>', [0, 0], 1, [0, 0], 2),
            cGetFilledPersistentBookmark(0, true),
            cAssertApproxRawContent('<p>a<span data-mce-type="bookmark" id="mce_1_start">\ufeff</span>b<span id="mce_1_end">\ufeff</span>c</p>'),
            cAssertSelection([0, 1, 0], 1, [0, 3, 0], 1),
            cAssertIdBookmark,
            cSetCursor([0, 1], 0),
            cResolveBookmark,
            cAssertApproxRawContent('<p>abc</p>'),
            cAssertSelection([0, 0], 1, [0, 0], 2)
        ])),
    ], success, failure);
});
//# sourceMappingURL=BookmarksTest.js.map
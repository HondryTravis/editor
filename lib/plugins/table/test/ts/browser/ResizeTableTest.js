import { Assertions, Chain, Guard, Mouse, NamedChain, UiFinder, TestLogs } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock';
import { Editor, TinyDom, ApiChains } from '@ephox/mcagar';
import Plugin from 'tinymce/plugins/table/Plugin';
import Theme from 'tinymce/themes/modern/Theme';
import { Cell } from '@ephox/katamari';
UnitTest.asynctest('browser.tinymce.plugins.table.ResizeTableTest', function (success, failure) {
    var lastObjectResizeStartEvent = Cell(null);
    var lastObjectResizedEvent = Cell(null);
    Plugin();
    Theme();
    var cGetBody = Chain.mapper(function (editor) {
        return TinyDom.fromDom(editor.getBody());
    });
    var cInsertTable = function (cols, rows) {
        return Chain.mapper(function (editor) {
            return TinyDom.fromDom(editor.plugins.table.insertTable(cols, rows));
        });
    };
    var cDragHandle = function (id, deltaH, deltaV) {
        return NamedChain.asChain([
            NamedChain.direct(NamedChain.inputName(), Chain.identity, 'editor'),
            NamedChain.direct('editor', cGetBody, 'editorBody'),
            NamedChain.read('editorBody', Chain.control(UiFinder.cFindIn('#mceResizeHandle' + id), Guard.tryUntil('wait for resize handlers', 100, 40000))),
            NamedChain.read('editorBody', Chain.fromChains([
                UiFinder.cFindIn('#mceResizeHandle' + id),
                Mouse.cMouseDown,
                Mouse.cMouseMoveTo(deltaH, deltaV),
                Mouse.cMouseUp
            ])),
            NamedChain.outputInput
        ]);
    };
    var cGetWidth = Chain.mapper(function (input) {
        var editor = input.editor;
        var elm = input.element.dom();
        var rawWidth = editor.dom.getStyle(elm, 'width');
        var pxWidth = editor.dom.getStyle(elm, 'width', true);
        return {
            raw: parseFloat(rawWidth),
            px: parseInt(pxWidth, 10),
            isPercent: /%$/.test(rawWidth)
        };
    });
    var assertWithin = function (value, min, max) {
        Assertions.assertEq('asserting if value falls within a certain range', true, value >= min && value <= max);
    };
    var cAssertWidths = Chain.op(function (input) {
        var expectedPx = input.widthBefore.px - 100;
        var expectedPercent = input.widthAfter.px / input.widthBefore.px * 100;
        // not able to match the percent exactly - there's always a difference in fractions, so lets assert a small range instead
        assertWithin(input.widthAfter.px, expectedPx - 1, expectedPx + 1);
        Assertions.assertEq('table width should be in percents', true, input.widthAfter.isPercent);
        assertWithin(input.widthAfter.raw, expectedPercent - 1, expectedPercent + 1);
    });
    var cBindResizeEvents = Chain.mapper(function (input) {
        var objectResizeStart = function (e) {
            lastObjectResizeStartEvent.set(e);
        };
        var objectResized = function (e) {
            lastObjectResizedEvent.set(e);
        };
        input.editor.on('ObjectResizeStart', objectResizeStart);
        input.editor.on('ObjectResized', objectResized);
        return {
            objectResizeStart: objectResizeStart,
            objectResized: objectResized
        };
    });
    var cUnbindResizeEvents = Chain.mapper(function (input) {
        input.editor.off('ObjectResizeStart', input.events.objectResizeStart);
        input.editor.off('ObjectResized', input.events.objectResized);
        return {};
    });
    var cClearResizeEventData = Chain.op(function () {
        lastObjectResizeStartEvent.set(null);
        lastObjectResizedEvent.set(null);
    });
    var cTableInsertResizeMeasure = NamedChain.asChain([
        NamedChain.direct(NamedChain.inputName(), Chain.identity, 'editor'),
        NamedChain.write('events', cBindResizeEvents),
        NamedChain.direct('editor', cInsertTable(5, 2), 'element'),
        NamedChain.write('widthBefore', cGetWidth),
        NamedChain.read('element', Mouse.cTrueClick),
        NamedChain.read('editor', cDragHandle('se', -100, 0)),
        NamedChain.write('widthAfter', cGetWidth),
        NamedChain.write('events', cUnbindResizeEvents),
        NamedChain.merge(['widthBefore', 'widthAfter'], 'widths'),
        NamedChain.output('widths')
    ]);
    var cAssertWidthsShouldBe = function (unit) { return Chain.op(function (input) {
        var expectingPercent = (unit === '%');
        Assertions.assertEq("table width before resizing is in " + unit, expectingPercent, input.widthBefore.isPercent);
        Assertions.assertEq("table width after resizing is in " + unit, expectingPercent, input.widthAfter.isPercent);
    }); };
    var cAssertEventData = function (state, expectedEventName) { return Chain.op(function (_) {
        Assertions.assertEq('Should be table element', 'TABLE', state.get().target.nodeName);
        Assertions.assertEq('Should be expected resize event', expectedEventName, state.get().type);
        Assertions.assertEq('Should have width', 'number', typeof state.get().width);
        Assertions.assertEq('Should have height', 'number', typeof state.get().height);
    }); };
    NamedChain.pipeline([
        NamedChain.write('editor', Editor.cFromSettings({
            plugins: 'table',
            width: 400,
            skin_url: '/project/js/tinymce/skins/lightgray'
        })),
        // when table is resized by one of the handlers it should retain the dimension units after the resize, be it px or %
        cClearResizeEventData,
        NamedChain.direct('editor', cTableInsertResizeMeasure, 'widths'),
        NamedChain.read('widths', cAssertWidths),
        cAssertEventData(lastObjectResizeStartEvent, 'objectresizestart'),
        cAssertEventData(lastObjectResizedEvent, 'objectresized'),
        // using configuration option [table_responsive_width=true] we are able to control the default units of the table
        cClearResizeEventData,
        NamedChain.read('editor', ApiChains.cSetContent('')),
        NamedChain.direct('editor', cTableInsertResizeMeasure, 'widths'),
        NamedChain.read('widths', cAssertWidthsShouldBe('%')),
        cAssertEventData(lastObjectResizeStartEvent, 'objectresizestart'),
        cAssertEventData(lastObjectResizedEvent, 'objectresized'),
        cClearResizeEventData,
        NamedChain.read('editor', ApiChains.cSetContent('')),
        NamedChain.read('editor', ApiChains.cSetSetting('table_responsive_width', false)),
        NamedChain.direct('editor', cTableInsertResizeMeasure, 'widths'),
        NamedChain.read('widths', cAssertWidthsShouldBe('px')),
        cAssertEventData(lastObjectResizeStartEvent, 'objectresizestart'),
        cAssertEventData(lastObjectResizedEvent, 'objectresized'),
        NamedChain.read('editor', Editor.cRemove)
    ], function () {
        success();
    }, failure, TestLogs.init());
});
//# sourceMappingURL=ResizeTableTest.js.map
import { Arbitraries } from '@ephox/agar';
import { UnitTest } from '@ephox/bedrock';
import { document } from '@ephox/dom-globals';
import { Arr, Option } from '@ephox/katamari';
import Jsc from '@ephox/wrap-jsverify';
import { composeList } from '../../../main/ts/listModel/ComposeList';
import { ListType } from '../../../main/ts/listModel/ListType';
import { normalizeEntries } from '../../../main/ts/listModel/NormalizeEntries';
import { parseLists } from '../../../main/ts/listModel/ParseLists';
UnitTest.test('ListModelTest', function () {
    var arbitratyContent = Jsc.bless({
        generator: Arbitraries.content('inline').generator.map(function (el) { return [el]; })
    });
    var arbitraryEntry = Jsc.record({
        isSelected: Jsc.constant(false),
        depth: Jsc.integer(1, 10),
        content: Jsc.small(arbitratyContent),
        listType: Jsc.oneof(Jsc.constant(ListType.OL), Jsc.constant(ListType.UL)),
        listAttributes: Jsc.oneof(Jsc.constant({}), Jsc.constant({ style: 'list-style-type: lower-alpha;' })),
        itemAttributes: Jsc.oneof(Jsc.constant({}), Jsc.constant({ style: 'color: red;' })),
    });
    var arbitraryEntries = Jsc.array(arbitraryEntry);
    var composeParseProperty = Jsc.forall(arbitraryEntries, function (inputEntries) {
        normalizeEntries(inputEntries);
        var outputEntries = composeParse(inputEntries);
        return isEqualEntries(inputEntries, outputEntries) || errorMessage(inputEntries, outputEntries);
    });
    var composeParse = function (entries) {
        return composeList(document, entries)
            .map(function (list) { return parseLists([list], Option.none()); })
            .bind(Arr.head)
            .map(function (entrySet) { return entrySet.entries; })
            .getOr([]);
    };
    var isEqualEntries = function (a, b) {
        return stringifyEntries(a) === stringifyEntries(b);
    };
    var errorMessage = function (inputEntries, outputEntries) {
        return "\nPretty print counterexample:\n" +
            ("input: [" + stringifyEntries(inputEntries) + "\n]\n") +
            ("output: [" + stringifyEntries(outputEntries) + "\n]");
    };
    var stringifyEntries = function (entries) {
        return Arr.map(entries, stringifyEntry).join(',');
    };
    var stringifyEntry = function (entry) {
        return "\n  {\n      depth: " + entry.depth + "\n      content: " + (entry.content.length > 0 ? serializeElements(entry.content) : '[Empty]') + "\n      listType: " + entry.listType + "\n      isSelected: " + entry.isSelected + "\n      listAttributes: " + JSON.stringify(entry.listAttributes) + "\n      itemAttributes: " + JSON.stringify(entry.itemAttributes) + "\n    }";
    };
    var serializeElements = function (elms) {
        return Arr.map(elms, function (el) { return el.dom().outerHTML; }).join('');
    };
    Jsc.assert(composeParseProperty, {
        size: 500,
        tests: 500,
        quiet: true
    });
    // Manual testing. To simplify debugging once a counterexample has been found.
    /* const inputEntries: Entry[] = [
      {
        depth: 2,
        content: [Element.fromHtml('<i>stuff</i>')],
        listType: ListType.OL,
        isSelected: false,
        listAttributes: {style: 'list-style-type: lower-alpha;'},
        itemAttributes: {}
      }
    ];
    throw composeParse(inputEntries); */
});
//# sourceMappingURL=ListModelTest.js.map
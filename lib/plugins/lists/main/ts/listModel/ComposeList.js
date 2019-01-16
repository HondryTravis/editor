/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Options } from '@ephox/katamari';
import { Attr, Css, Element, Insert, InsertAll, Node, Replication } from '@ephox/sugar';
var createSection = function (scope, listType) {
    var section = {
        list: Element.fromTag(listType, scope),
        item: Element.fromTag('li', scope)
    };
    Insert.append(section.list, section.item);
    return section;
};
var joinSections = function (parent, appendor) {
    Insert.append(parent.item, appendor.list);
};
var createJoinedSections = function (scope, length, listType) {
    var sections = [];
    var _loop_1 = function (i) {
        var newSection = createSection(scope, listType);
        Arr.last(sections).each(function (lastSection) { return joinSections(lastSection, newSection); });
        sections.push(newSection);
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return sections;
};
var normalizeSection = function (section, entry) {
    if (Node.name(section.list).toUpperCase() !== entry.listType) {
        section.list = Replication.mutate(section.list, entry.listType);
    }
    Attr.setAll(section.list, entry.listAttributes);
};
var createItem = function (scope, attr, content) {
    var item = Element.fromTag('li', scope);
    Attr.setAll(item, attr);
    InsertAll.append(item, content);
    return item;
};
var setItem = function (section, item) {
    Insert.append(section.list, item);
    section.item = item;
};
var writeShallow = function (scope, outline, entry) {
    var newOutline = outline.slice(0, entry.depth);
    Arr.last(newOutline).each(function (section) {
        setItem(section, createItem(scope, entry.itemAttributes, entry.content));
        normalizeSection(section, entry);
    });
    return newOutline;
};
var populateSections = function (sections, entry) {
    Arr.last(sections).each(function (section) {
        Attr.setAll(section.list, entry.listAttributes);
        Attr.setAll(section.item, entry.itemAttributes);
        InsertAll.append(section.item, entry.content);
    });
    for (var i = 0; i < sections.length - 1; i++) {
        Css.set(sections[i].item, 'list-style-type', 'none');
    }
};
var writeDeep = function (scope, outline, entry) {
    var newSections = createJoinedSections(scope, entry.depth - outline.length, entry.listType);
    populateSections(newSections, entry);
    Options.liftN([
        Arr.last(outline),
        Arr.head(newSections)
    ], joinSections);
    return outline.concat(newSections);
};
var composeList = function (scope, entries) {
    var outline = Arr.foldl(entries, function (outline, entry) {
        return entry.depth > outline.length ? writeDeep(scope, outline, entry) : writeShallow(scope, outline, entry);
    }, []);
    return Arr.head(outline).map(function (section) { return section.list; });
};
export { composeList };
//# sourceMappingURL=ComposeList.js.map
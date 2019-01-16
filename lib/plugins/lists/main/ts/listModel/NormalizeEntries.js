/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr, Merger, Option } from '@ephox/katamari';
var assimilateEntry = function (adherent, source) {
    adherent.listType = source.listType;
    adherent.listAttributes = Merger.merge({}, source.listAttributes);
};
var normalizeShallow = function (outline, entry) {
    var matchingEntryDepth = entry.depth - 1;
    outline[matchingEntryDepth].each(function (matchingEntry) { return assimilateEntry(entry, matchingEntry); });
    var newOutline = outline.slice(0, matchingEntryDepth);
    newOutline.push(Option.some(entry));
    return newOutline;
};
var normalizeDeep = function (outline, entry) {
    var newOutline = outline.slice(0);
    var diff = entry.depth - outline.length;
    for (var i = 1; i < diff; i++) {
        newOutline.push(Option.none());
    }
    newOutline.push(Option.some(entry));
    return newOutline;
};
var normalizeEntries = function (entries) {
    Arr.foldl(entries, function (outline, entry) {
        return entry.depth > outline.length ? normalizeDeep(outline, entry) : normalizeShallow(outline, entry);
    }, []);
};
export { normalizeEntries };
//# sourceMappingURL=NormalizeEntries.js.map
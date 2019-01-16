/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Arr } from '@ephox/katamari';
var traverse = function (node, fn) {
    fn(node);
    if (node.firstChild) {
        traverse(node.firstChild, fn);
    }
    if (node.next) {
        traverse(node.next, fn);
    }
};
var findMatchingNodes = function (nodeFilters, attributeFilters, node) {
    var nodeMatches = {};
    var attrMatches = {};
    var matches = [];
    if (node.firstChild) {
        traverse(node.firstChild, function (node) {
            Arr.each(nodeFilters, function (filter) {
                if (filter.name === node.name) {
                    if (nodeMatches[filter.name]) {
                        nodeMatches[filter.name].nodes.push(node);
                    }
                    else {
                        nodeMatches[filter.name] = { filter: filter, nodes: [node] };
                    }
                }
            });
            Arr.each(attributeFilters, function (filter) {
                if (typeof node.attr(filter.name) === 'string') {
                    if (attrMatches[filter.name]) {
                        attrMatches[filter.name].nodes.push(node);
                    }
                    else {
                        attrMatches[filter.name] = { filter: filter, nodes: [node] };
                    }
                }
            });
        });
    }
    for (var name in nodeMatches) {
        if (nodeMatches.hasOwnProperty(name)) {
            matches.push(nodeMatches[name]);
        }
    }
    for (var name in attrMatches) {
        if (attrMatches.hasOwnProperty(name)) {
            matches.push(attrMatches[name]);
        }
    }
    return matches;
};
var filter = function (nodeFilters, attributeFilters, node) {
    var matches = findMatchingNodes(nodeFilters, attributeFilters, node);
    Arr.each(matches, function (match) {
        Arr.each(match.filter.callbacks, function (callback) {
            callback(match.nodes, match.filter.name, {});
        });
    });
};
export { filter };
//# sourceMappingURL=FilterNode.js.map
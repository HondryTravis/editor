/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import NodeType from './NodeType';
import * as ClientRect from '../geom/ClientRect';
import { Arr } from '@ephox/katamari';
var getNodeClientRects = function (node) {
    var toArrayWithNode = function (clientRects) {
        return Arr.map(clientRects, function (clientRect) {
            clientRect = ClientRect.clone(clientRect);
            clientRect.node = node;
            return clientRect;
        });
    };
    if (NodeType.isElement(node)) {
        return toArrayWithNode(node.getClientRects());
    }
    if (NodeType.isText(node)) {
        var rng = node.ownerDocument.createRange();
        rng.setStart(node, 0);
        rng.setEnd(node, node.data.length);
        return toArrayWithNode(rng.getClientRects());
    }
};
var getClientRects = function (node) {
    return Arr.foldl(node, function (result, node) {
        return result.concat(getNodeClientRects(node));
    }, []);
};
export { getClientRects };
//# sourceMappingURL=Dimensions.js.map
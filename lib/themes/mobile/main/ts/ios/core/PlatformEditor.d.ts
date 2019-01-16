/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
import { Option } from '@ephox/katamari';
import { Element } from '@ephox/sugar';
declare const _default: {
    getBody: (editor: any) => any;
    getDoc: (editor: any) => any;
    getWin: (editor: any) => any;
    getSelection: (editor: any) => any;
    getFrame: (editor: any) => any;
    getActiveApi: (editor: any) => Option<{
        body: (...args: any[]) => Element;
        doc: (...args: any[]) => Element;
        win: (...args: any[]) => any;
        html: (...args: any[]) => Element;
        getSelection: () => Option<any>;
        setSelection: any;
        clearSelection: any;
        frame: (...args: any[]) => any;
        onKeyup: any;
        onNodeChanged: any;
        onDomChanged: any;
        onScrollToCursor: any;
        onScrollToElement: any;
        onToReading: any;
        onToEditing: any;
        onToolbarScrollStart: any;
        onTouchContent: any;
        onTapContent: any;
        onTouchToolstrip: any;
        getCursorBox: any;
    }>;
};
export default _default;

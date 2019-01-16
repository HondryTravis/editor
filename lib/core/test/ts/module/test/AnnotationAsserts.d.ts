import { Step } from '@ephox/agar';
import { Editor } from 'tinymce/core/api/Editor';
declare const sAnnotate: (editor: Editor, name: string, uid: string, data: {}) => Step<{}, {}>;
declare const sAssertHtmlContent: (tinyApis: any, children: string[]) => any;
declare const assertMarker: (editor: Editor, expected: any, nodes: any[]) => void;
declare const sAssertGetAll: (editor: Editor, expected: Record<string, number>, name: string) => Step<{}, {}>;
export { sAnnotate, sAssertHtmlContent, sAssertGetAll, assertMarker };

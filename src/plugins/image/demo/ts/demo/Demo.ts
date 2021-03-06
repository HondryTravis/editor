/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  theme: 'modern',
  skin_url: '../../../../../js/tinymce/skins/lightgray',
  plugins: 'image code',
  toolbar: 'undo redo | image code',
  images_upload_url: 'postAcceptor.php',
  file_picker_callback (callback, value, meta) {
    callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
  },
  height: 600
});

export {};
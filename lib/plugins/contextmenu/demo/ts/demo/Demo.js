/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.init({
    selector: 'textarea.tinymce',
    theme: 'modern',
    skin_url: '../../../../../js/tinymce/skins/lightgray',
    plugins: 'contextmenu code link image',
    toolbar: 'contextmenu code link',
    height: 600,
    image_caption: true,
    image_advtab: true,
    image_title: true,
    image_class_list: [
        { title: 'None', value: '' },
        { title: 'Class1', value: 'class1' },
        { title: 'Class2', value: 'class2' }
    ],
    images_upload_url: 'postAcceptor.php',
    file_picker_callback: function (callback, value, meta) {
        callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    },
    contextmenu: 'code link image'
});
//# sourceMappingURL=Demo.js.map
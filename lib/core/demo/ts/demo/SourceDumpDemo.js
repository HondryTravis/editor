import { document } from '@ephox/dom-globals';
export default function () {
    tinymce.init({
        selector: 'textarea#editor',
        skin_url: '../../../../js/tinymce/skins/lightgray',
        codesample_content_css: '../../../../js/tinymce/plugins/codesample/css/prism.css',
        visualblocks_content_css: '../../../../js/tinymce/plugins/visualblocks/css/visualblocks.css',
        templates: [
            { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
            { title: 'Some title 2', description: 'Some desc 2', content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
        ],
        image_caption: true,
        plugins: [
            'autosave advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker toc',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern',
            'codesample help noneditable print'
        ],
        add_unload_trigger: false,
        autosave_ask_before_unload: false,
        toolbar: 'fontsizeselect fontselect insertfile undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample code | ltr rtl',
        init_instance_callback: function (editor) {
            editor.on('init keyup change', function () { return dumpSource(editor); });
        }
    });
    var dumpSource = function (editor) {
        var textArea = document.getElementById('source');
        var raw = document.getElementById('raw');
        textArea.value = raw.checked ? editor.getBody().innerHTML : editor.getContent();
    };
}
//# sourceMappingURL=SourceDumpDemo.js.map
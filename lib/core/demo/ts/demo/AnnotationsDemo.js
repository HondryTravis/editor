import { prompt, document } from '@ephox/dom-globals';
export default function () {
    var button = document.createElement('button');
    button.innerHTML = 'Get all annotations';
    button.addEventListener('click', function () {
        // tslint:disable no-console
        console.log('annotations', tinymce.activeEditor.annotator.getAll('alpha'));
        // tslint:enable no-console
    });
    document.body.appendChild(button);
    tinymce.init({
        skin_url: '../../../../js/tinymce/skins/lightgray',
        selector: 'textarea.tinymce',
        toolbar: 'annotate-alpha',
        plugins: [],
        content_style: '.mce-annotation { background-color: darkgreen; color: white; }',
        setup: function (ed) {
            ed.addButton('annotate-alpha', {
                text: 'Annotate',
                onclick: function () {
                    var comment = prompt('Comment with?');
                    ed.annotator.annotate('alpha', {
                        comment: comment
                    });
                    ed.focus();
                },
                onpostrender: function (ctrl) {
                    var button = ctrl.control;
                    ed.on('init', function () {
                        ed.annotator.annotationChanged('alpha', function (state, name, obj) {
                            if (!state) {
                                button.active(false);
                            }
                            else {
                                button.active(true);
                            }
                        });
                    });
                }
            });
            ed.on('init', function () {
                ed.annotator.register('alpha', {
                    persistent: true,
                    decorate: function (uid, data) {
                        return {
                            attributes: {
                                'data-mce-comment': data.comment
                            }
                        };
                    }
                });
            });
        },
        theme: 'modern',
        menubar: false
    });
}
//# sourceMappingURL=AnnotationsDemo.js.map
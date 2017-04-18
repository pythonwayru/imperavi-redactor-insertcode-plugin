(function($)
{
    $.Redactor.prototype.insertcode = function()
    {
        return {
            langs: {
                en: {
                    "insertcode": "Insert Code",
                    "lang-sel": "Select Lang",
                },
                ru: {
                    "insertcode": "Вставить код",
                    "lang-sel": "Выберите язык",
                }
            },
            getTemplate: function()
            {
                return String()
                + '<div class="modal-section" id="redactor-modal-insertcode">'
                    + '<section>'
                        + '<label>' + this.lang.get('lang-sel') + '</label>'
                        + '<select id="insertcode-select" >'
                          + '<option>python</option>'
                          + '<option>django</option>'
                          + '<option>bash</option>'
                          + '<option>html</option>'
                          + '<option>js</option>'
                          + '<option>css</option>'
                        + '</select>'
                    + '</section>'
                    + '<section>'
                        + '<label>Введите код</label>'
                        + '<textarea id="insertcode-textarea" style="height: 200px;"></textarea>'
                    + '</section>'
                    + '<section>'
                        + '<button id="redactor-modal-button-action">' 
                           + this.lang.get('save') + '</button>'
                        + '<button id="redactor-modal-button-cancel">'
                           + this.lang.get('cancel') + '</button>'
                    + '</section>'
                + '</div>';
            },
            init: function()
            {
                var button = this.button.add('insertcode', 
                        this.lang.get('insertcode'));
                this.button.setIcon(button, '<i class="re-icon-codesnippets"></i>');
                this.button.addCallback(button, this.insertcode.show);
            },
            show: function()
            {
                this.modal.addTemplate('insertcode', this.insertcode.getTemplate());
                this.modal.load('insertcode', this.lang.get('insertcode'), 600);
                
                var button = this.modal.getActionButton();
                button.on('click', this.insertcode.insert);
 
                this.modal.show();
 
                $('#insertcode-textarea').focus();
            },
            insert: function()
            {
                var lang = $('#insertcode-select').val();
                var html = '<pre><code class="' + lang +'">' 
                    + $('#insertcode-textarea').val() +
                    '</code></pre>';
 
                this.modal.close();
 
                this.buffer.set(); 
                this.insert.raw(html);
            }
        };
    };
})(jQuery);

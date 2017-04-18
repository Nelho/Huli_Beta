       var campos_max = 10;   //max de 10 campos

        var x = 0;
        //Adicionar questao de pesquisa
        $('#add_campo').click (function(e) {
            e.preventDefault();     //prevenir novos clicks
            if (x < campos_max) {
                $('#listaQuestao').append('<div class="form-group">\
                <input class="form-control" type="text" id="questao[]" maxlength="500" value="">\
                <button type="button" class="btn btn-sm btn-danger btn-cancel-question remover_campo">\
                remover\
                </button>\
                </div>');
                x++;
            }
        });
            
        //remover questao de pesquisa
        $('#listaQuestao').on("click",".remover_campo",function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
        });


        //Adicionar criterio de inclusao
        $('#add_criterio_inclusao').click (function() {
            if($('#inclusao').val().length > 0) {
                $('#criterio-inclusao').append($('<option>', {
                    value: 1,
                    text: $('#inclusao').val()
                }));
                document.getElementById('inclusao').value = "";
            }       
        });

        //Remover criterio de inclusao
        $('#del_criterio_inclusao').click(function () {
            $("#criterio-inclusao option:selected").remove();
        });

        //Adicionar criterio de exclusao
        $('#add_criterio_exclusao').click (function() {
            if($('#exclusao').val().length > 0) {
                $('#criterio-exclusao').append($('<option>', {
                    value: 1,
                    text: $('#exclusao').val()
                }));
            }
            document.getElementById('exclusao').value = "";
        });

        //remover criterio de exclusao
        $('#del_criterio_exclusao').click(function () {
            $("#criterio-exclusao option:selected").remove();

        });

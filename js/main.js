
    //QUESTÕES DE PESQUISA
    var app = angular.module("myShoppingList", []); 
    app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.addItem = function () {
        
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "Questão de pesquisa já inserida. Por favor, insira novemente outra questão!";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    });
    //QUESTÕES DE PESQUISA



        var campos_max = 10;   //max de 10 campos

        var x = 0;

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


        
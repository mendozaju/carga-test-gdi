var cargaTest = angular.module('cargaTest', []);

cargaTest.controller('cargaTest', function ($scope, $location, $window) {

    $scope.pageIndex = 1;

    $scope.categories = [{
        title: 'Sindo de cosas y animales',
        items: ['cua-cua', 'pio-pio', 'miau', 'asd', 'tu-tu', '!pum!'],
        completed: false,
        id: 0
    },
        {
            title: 'Animales de verdad y de juguete',
            items: ['abeja', 'conejo', 'asd', 'ad', 'asd', 'lalo', 'por', 'echo', 'sep'],
            completed: false,
            id: 1
        }];

    $scope.totalOfCategories = $scope.categories.length;
    $scope.categoriesCompleted = 0;
    $scope.advncePercentaje = 0;

    $scope.setPageIndex = function (index) {
        console.log('Seteo en ' + index);
        $scope.pageIndex = index;
    }

    $scope.setCompleted = function (id, completed) {
        angular.forEach($scope.categories, function (value, key) {
            console.log('buscando.. '+ JSON.stringify(value));
            console.log('value:' + value.id);
            console.log('id:' + id);
            if (parseInt(value.id) === parseInt(id)) {
                value.completed = completed;

                if (completed) {
                    console.log('agrego a los completos...');
                    $scope.categoriesCompleted = $scope.categoriesCompleted + 1;
                    console.log('cantidad de completos:'+$scope.categoriesCompleted);
                } else {
                   console.log('Elimino de los...');
                   $scope.categoriesCompleted = $scope.categoriesCompleted - 1;
                }
                //Actualizo el porcentaje de avance
                $scope.advncePercentaje = getPercentageAdvce();
            }
        });
    }

    $scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };


    function getPercentageAdvce() {
        if ($scope.categoriesCompleted === 0) {
            return 0;
        }
        return ($scope.categoriesCompleted * 100) / $scope.totalOfCategories;
    }
});
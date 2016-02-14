var app = angular.module('mainModule', ['ngRoute']);

// Configuro todas las rutas
app.config(function($routeProvider) {
    // Ruta principal
    $routeProvider.when('/', {
        controller: 'mainController',
        templateUrl: "/resources/app/home/welcome.html"
    }).otherwise({
        controller: 'mainController',
        templateUrl: "/resources/app/home/welcome.html"
    });
});

app.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

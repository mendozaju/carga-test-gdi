var app = angular.module('mainModule', ['ngRoute','login','home','nCarga', 'cargaTest']);

// Configuro todas las rutas
app.config(function($routeProvider, $locationProvider) {
    // Ruta principal
    $routeProvider.when('/', {
        controller: 'mainController',
        templateUrl: "/resources/app/home/welcome.html"
    }).when('/nueva-carga',{
    	controller: 'nuevaCarga',
    	templateUrl: "/resources/app/home/nueva-carga/template.html"
    }).when('/new-test',{
        controller:'cargaTest',
        templateUrl: '/resources/app/home/carga-test/template.html'
    });
    
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});


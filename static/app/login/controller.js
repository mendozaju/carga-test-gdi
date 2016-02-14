var Login = angular.module('login', []);

Login.controller('loginController', ['$scope', function($scope) {
    $scope.title = "Hola Angular, usando controller!";
}]);

Login.directive('loginForm', function() {
    return {
        restrict: 'E',
        templateUrl: '/resources/app/login/login.html'
    };
});



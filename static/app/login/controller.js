var Login = angular.module('login', []);

Login.controller('loginController', ['$scope', function($scope) {
    
    $scope.gologin = function(){
    	$window.location.href = '/profile';
    };


}]);

Login.directive('loginForm', function() {
    return {
        restrict: 'E',
        templateUrl: '/resources/app/login/login.html'
    };
});



var nCarga = angular.module('nCarga', []);

nCarga.controller('nuevaCarga',function($scope,$location,$window){
	
	$scope.submit= function(){
		
		$location.path('/');		
	} ;
});
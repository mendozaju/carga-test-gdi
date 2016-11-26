var Home = angular.module('home', []);

Home.directive('customNavBar', function(){
	return{
		restrict:'E',
		templateUrl:'/resources/app/home/d-navbar/template.html'
	}
});
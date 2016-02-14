var Home = angular.module('home', []);

Home.directive('leftMenu', function(){
	return{
		restrict:'E',
		templateUrl:'/resources/app/home/left-menu.html'
	}
});
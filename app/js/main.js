angular.module('angularWeather',['ngAnimate','ngRoute'])
.config(function($routeProvider,$locationProvider)){


	$routeProvider.otherwise({
		redirectTo:'/fotos'
	});
}
var myApp = angular.module('myApp', ['ngRoute', 'react']);

myApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			controller: 'homeController',
			templateUrl: '/legacy/templates/home.html'
		})
		.otherwise({ redirectTo: '/home' })
	}
);

myApp.value('DummyComponent', window.ReactEntry.DummyComponent);

myApp.controller('mainController', function($scope) {

});

myApp.controller('homeController', function($scope) {

});

(function () {
	'use strict';

	angular.module('todoApp', [
		'ngRoute',
		'todoApp',
	]);

	angular.module('todoApp').config(
		// ['$routeProvider', '$httpProvider',
		function ($routeProvider, $httpProvider) {
			$routeProvider.
				when('/',{
					templateUrl:'main.html',
					controller:'defaultCtrl',
				})
				.when('/album',{
					templateUrl:'album.html',
					controller: 'userController',
				})
				.when('/album/:userId',{
					templateUrl:'album.html',
					controller: 'userController',
				})
				.otherwise({
					redirectTo:'/',
				});
		});
})();

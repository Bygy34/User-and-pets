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
					controller:'defaultCtrl',
				})
				.when('/album/:userId',{
					templateUrl:'album.html',
					controller:'defaultCtrl',
				})
				.when('/image',{
					templateUrl:'image.html',
					controller:'defaultCtrl',
				})
				.when('/image/:albumId',{
					templateUrl:'image.html',
					controller:'defaultCtrl',
				})
				.otherwise({
					redirectTo:'/',
				});

			//$scope.userId = $routeParams.userId;
			//$scope.albumIdd = $routeParams.albumId;
		}
		// ]
		);
})();

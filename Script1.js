// JavaScript source code
var myApp = angular.module('OwnersEndPetsApp', [])
myApp.factory('DirectoriesService', function ($http) {
     var DirectoriesService = {};
     DirectoriesService.getExplorerModelpath = function () {
       return $http.get('http://localhost:54869/api/values/GetUser');
   };
     return DirectoriesService;
         });



 myApp.controller('defaultCtrl', function ($scope, $http, DirectoriesService) {    
     $scope.start = function () {
         DirectoriesService.getExplorerModelpath()
          .then(function (response) {
              $scope.DirModelList = response.data;
          });
     }
     $scope.start();



    



 });




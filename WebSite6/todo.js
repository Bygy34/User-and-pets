// (function () {
var myApp = angular.module('todoApp');
myApp.factory('OwnersEndPetsService', function ($http) {
    var OwnersEndPetsService = {};
    OwnersEndPetsService.getUsers = function () {
        return $http.get('http://localhost:54869/api/values/GetUser');
    };
    OwnersEndPetsService.getUser = function (id) {
        return $http.get('http://localhost:54869/api/values/GetUser/' + id);
    };
    OwnersEndPetsService.AddUser = function (data) {
        return $http.post('http://localhost:54869/api/values/GetUser/');
    };
    OwnersEndPetsService.AddPet = function (data,id) {
        return $http.post('http://localhost:54869/api/values/GetUser/' + id);
    };
    OwnersEndPetsService.Delete = function (id) {
        var request = $http({
            method: "delete",
            url: "http://localhost:54869/api/Book/" + id
        });
        return request;
    };
    return OwnersEndPetsService;
});



myApp.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
myApp.controller('mainController',
       function ($scope, $http, $rootScope, $routeParams, OwnersEndPetsService) {
           $scope.currentPage = 0;
           $scope.user = { userId: '' }
           $scope.UserList = [];
           $scope.pageSize = 3;
           $scope.start = function () {
               OwnersEndPetsService.getUsers()
                .then(function (response) {
                    $scope.UserList = response.data;
                });
           }
           $scope.start();
           $scope.numberOfPages = function () {
               return Math.ceil($scope.UserList.length / $scope.pageSize);
           };
       });

myApp.controller('userController',
      function ($scope, $http, $rootScope, $routeParams, OwnersEndPetsService) {
      });
myApp.controller('defaultCtrl',
function ($scope, $http, $rootScope, $routeParams, OwnersEndPetsService) {
    $scope.UserName = '';
    $scope.AddUser = function (UserName) {

    };

    $scope.getIdUser = function (userId) {
        $scope.user.userId = userId;
    };



    $scope.DelIdUser = function (id) {
        OwnersEndPetsService.Delete(id).then(function () {
            $scope.messege = "Deleted Successfuly";
            $scope.start();
        });
    };



});

// (function () {
   var myApp =  angular.module('todoApp');
    myApp.factory('DirectoriesService', function ($http) {
     var DirectoriesService = {};
     DirectoriesService.getExplorerModelpath = function () {
       return $http.get('http://localhost:54869/api/values/GetUser');
   };
   DirectoriesService.Delete=function(id){      
        var request = $http({
            method: "delete",
            url: "http://localhost:54869/api/Book/" + id
        });
        return request;
   };
     return DirectoriesService;
         });






    myApp.controller('defaultCtrl',
    function($scope, $http,$rootScope, $routeParams, DirectoriesService) {

$scope.start = function () {
         DirectoriesService.getExplorerModelpath()
          .then(function (response) {
              $scope.DirModelList = response.data;
          });
     }
     $scope.start();

     $scope.DelIdUser = function(id){
DirectoriesService.Delete(id).then(function(){
    $scope.messege = "Deleted Successfuly";
        $scope.start();
});
    };





//         $scope.users = [];
//         $scope.albums = [];
//         $scope.images = [];
//         $scope.userIdd = 2;
//         $scope.albumIdd = 2;
    
//     $scope.getIdUser = function(userId){
//         console.log(userId);
//         $scope.userIdd = userId;
//         $http.get('http://jsonplaceholder.typicode.com/albums/' + userId).then(function(response){
//         response.data.forEach(function(element){
//             $scope.albums.push(element);
//         });
//     });
//     };

//     $scope.getIdAlbum = function(albumId){
//         console.log(albumId);
//         $scope.albumIdd = albumId;
//         $http.get('http://jsonplaceholder.typicode.com/images/' + albumId).then(function(response){
//         response.data.forEach(function(element){
//             $scope.image.push(element);
//         });
//     });
//     };    

// $http.get('http://jsonplaceholder.typicode.com/users').then(function(response){
//         response.data.forEach(function(element){
//             $scope.users.push(element);
//         });
//     });

//     $scope.refresh = function() {
//         $http.get('http://jsonplaceholder.typicode.com/albums').then(function(response){
//             response.data.forEach(function(element){
//                 $scope.albums.push(element);
//             });
//         });
//     }
//     $scope.refresh();

//     $http.get('http://jsonplaceholder.typicode.com/photos').then(function(response){
//         response.data.forEach(function(element){
//             console.log(element)
//             $scope.images.push(element);
//         });
//         console.log(response);
//     });
  });
// })();
  
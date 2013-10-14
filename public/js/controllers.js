'use strict';

/* Controllers */


myApp.controller("IndexCtrl",['$scope','name',function($scope,name) {
   $scope.pageTitle = "Home Page"

   $scope.userName = name;
}]);

myApp.controller("BootStrapCtrl",function($scope) {
    $scope.pageTitle = "Twitter Bootstrap Testing";
});

myApp.controller("UsersCtrl", function($scope, $http){
    $scope.pageTitle = "User List";


    $http({method: 'GET', url: '/api/users'}).
        success(function(data, status, headers, config) {
            $scope.userList = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            $scope.userList = data;
        });

});






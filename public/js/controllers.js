'use strict';

/* Controllers */


myApp.controller("IndexCtrl", function($scope) {
   $scope.pageTitle = "Home Page"
});

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






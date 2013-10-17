'use strict';

/* Controllers */


myApp.controller("IndexCtrl",function($scope,constants) {
   $scope.pageTitle = "Home Page"

   $scope.userName = constants.getName;

});

myApp.controller("BootStrapCtrl",function($scope) {
    $scope.pageTitle = "Twitter Bootstrap Testing";

});

myApp.controller("UsersCtrl",function($scope, userData){
    $scope.pageTitle = "User List";

    $scope.userList = userData.getUsers();


});






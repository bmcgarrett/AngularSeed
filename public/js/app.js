'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp',['ngResource']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: "IndexCtrl",
            templateUrl: "partials/index"
        }
    ).
        when('/bootstrap',
        {
            controller: "BootStrapCtrl",
            templateUrl: "partials/bootstrap"
        }
    ).
        when('/users',
        {
            controller: "UsersCtrl",
            templateUrl: "partials/users"
        }
    ).
        otherwise({
            redirectTo: '/'
        })
});


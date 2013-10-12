'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'views/index', controller: GenericViewCtrl});
    $routeProvider.when('/bootstrap', {templateUrl: 'views/partials/bootstrap', controller: BootstrapViewCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
    }]);

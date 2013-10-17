'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

myApp.factory('userData',function($http,$q){
   return {
            getUsers: function() {
                var deffered = $q.defer();

                $http({method: 'GET', url: '/api/users'}).
                    success(function(data, status, headers, config) {
                        deffered.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deffered.reject(status);
                    });

                return deffered.promise;
            }
   };
});

myApp.factory('constants',function(){
    return {
        getName: "Brendan McGarrett"
    }
});







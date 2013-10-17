'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

myApp.factory('userData',function($resource,$q){
   return {
            getUsers: function() {
                var deferred = $q.defer();
                $resource('/api/users').query({},function (event)
                    {
                       deferred.resolve(event);
                    },
                    function(response){
                        deferred.reject(response);
                    });
                return deferred.promise;
            }
   };
});

myApp.factory('constants',function(){
    return {
        getName: "Brendan McGarrett"
    }
});







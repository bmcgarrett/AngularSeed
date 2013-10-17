'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

  myApp.filter('size', function(){
    return function(size){
        switch (size){
            case "s":
                return "Small";
            case "m":
                return "Medium";
            case "l":
                return "Large";
        }
    }
});





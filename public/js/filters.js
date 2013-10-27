'use strict';

/* Filters */

myApp.filter('size', function(){
    return function(size){
        switch (size){
            case "s":
                return "Small";
            case "m":
                return "Medium";
            case "l":
                return "Large";
            case "xl":
                return "Extra Large";
        }
    }
});





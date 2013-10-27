'use strict';

/* jasmine specs for filters go here */

describe('filters', function() {
    var size;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($filter) {
        size = $filter('size');
    }));

    describe('size',function(){
        it('should return small for s', inject(function(){
            expect(size('s')).toBe("Small");
        }));

        it('should return medium for m', inject(function(){
            expect(size('m')).toBe("Medium");
        }));

        it('should return large for l', inject(function(){
            expect(size('l')).toBe("Large");
        }));

        it('should return extra large for xl',inject(function(){
            expect(size('xl')).toBe("Extra Large");
        }))
    })

});

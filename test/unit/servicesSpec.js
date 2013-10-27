'use strict';

/* jasmine specs for services go here */

describe('services', function() {
    beforeEach(module('myApp'));

  describe('constants',function() {
      it('should return Brendan McGarrett for getName', inject(function(constants){
          expect(constants.getName).toEqual('Brendan McGarrett');
      }));
  });

});

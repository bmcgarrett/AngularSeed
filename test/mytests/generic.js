'use strict';

var assert = require("assert");

var should = require("should");

describe('Services_Name', function(){

    var name = "Brendan McGarrett";

    it('should have variable equal to my name', function() {
        name.should.equal("Brendan McGarrett");
    });

    it('should have space between name',function() {
        var spaceInName = name.indexOf(" ");
        assert.notEqual(spaceInName,-1)
    });

    it('should not be equal to null',function() {
        assert.notEqual(name, null);
    });

});
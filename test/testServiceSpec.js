var chai     = require('chai'),
    expect   = chai.expect,
    mongoose = require('mongoose'),
    libraryService = require('../services/libraryService'),
    Q = require('q');

describe('getThings', function(){
  it('should return a list of things', function(done){
      Q.nfcall(libraryService.things).then(function(things) {
        expect(things).to.be.an('array');
        done();
      });
    });    
  });





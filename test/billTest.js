'use strict';

const assert = require('chai').assert;

const validate = require('../public/scripts/testFunctions').validateCostInput


describe('Bill Validation', function(){
  it('App should return console log when less or equal to 0.', function(){
    assert.typeOf(validate(0), 'undefined');
    });
  it('App should return console log when greater than 5000.', function(){
    assert.typeOf(validate(5001), 'undefined');
  });
  it('App should return a number data type.', function(){
    assert.typeOf(validate(50), 'number');
  });
});

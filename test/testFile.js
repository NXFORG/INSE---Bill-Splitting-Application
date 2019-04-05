'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');

const validate = require('../public/scripts/testFunctions').validateCostInput

//TEST to check the pages load properly:
describe('Public Page Status:', function() {
    describe ('Main page', function() {
        it('Status', function(done){
            request('http://localhost:8080/index.html', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    //Checks about page loading:
    describe ('About page', function() {
        it('Status', function(done){
            request('http://localhost:8080/about.html', function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                done();
            });
        });

});
  //Checks debt page loading:
    describe ('Debt page', function() {
        it('Status', function(done){
            request('http://localhost:8080/debt.html', function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                done();
            });
        });

    describe ('Voucher page', function() {
        it('Status', function(done){
            request('http://localhost:8080/vouchers.html', function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                done();
            });
        });
});
//Checks css page loading:
describe ('CSS page', function() {
    it('Status', function(done){
        request('http://localhost:8080/style.css', function(error, response, body) {
              expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
});
});
});

//Check Node is not serving wrong folders by serving only public:
describe('Node Folders Status:', function() {
  //Check Script folder:
    describe ('Scripts', function() {
        it('Status', function(done){
            request('http://localhost:8080/script/billSplit.js', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
      });
      //Check Images folder:
      describe ('Images', function() {
          it('Status', function(done){
              request('http://localhost:8080/script/payPal.png', function(error, response, body) {
                  expect(response.statusCode).to.equal(404);
                  done();
              });
          });
        });
        //Check PHP folder:
        describe ('PHP', function() {
            it('Status', function(done){
                request('http://localhost:8080/script/index.php', function(error, response, body) {
                    expect(response.statusCode).to.equal(404);
                    done();
                });
            });
          });
          //Check json folder:
        describe ('JSON', function() {
            it('Status', function(done){
                request('http://localhost:8080/script/contacts.json', function(error, response, body) {
                    expect(response.statusCode).to.equal(404);
                    done();
                });
            });
          });
          //Check documents:
          describe ('Docs', function() {
              it('Status', function(done){
                  request('http://localhost:8080/script/README.md', function(error, response, body) {
                      expect(response.statusCode).to.equal(404);
                      done();
                  });
              });
            });
      });

//TEST to check the validation works for bills:
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

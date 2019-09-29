const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int}', function (x, y, callback) {
    // Write code here that turns the phrase above into concrete actions
    calculator= new Calculator(x,y);
    callback();
});


When('they are added together', function () {
    // Write code here that turns the phrase above into concrete actions
    calculator.add();
});

Then('should the result be {int}', function (result) {
    assert.equal(calculator.getResult(),result);
});
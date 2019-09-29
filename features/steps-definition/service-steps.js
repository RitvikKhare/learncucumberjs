const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const ServiceCall = require('../../lib/serviceCall');

let serviceCall;

Given('I am trying to get User Details for Ritvik Khare', async function () {
    serviceCall= new ServiceCall();
});


When('I call the service', async function () {
    serviceCall.callService();
});

Then('Check the id 28248633 is matching with Response', async function () {
    assert.equal(serviceCall.getIDfromResponse(),28248633);
});
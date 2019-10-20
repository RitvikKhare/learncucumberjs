const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const LearnProtractor = require('../../lib/launchProtractor');

let learnProtractor;

Given('I am trying to get User Details for Ritvik Khare', async function () {
    learnProtractor= new LearnProtractor();
});


When('I call the service', async function () {
    learnProtractor.launchBrowser();
});

Then('Check the id 28248633 is matching with Response', async function () {
    
});
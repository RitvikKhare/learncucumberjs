const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const LearnProtractor = require('../../lib/launchProtractor');

let learnProtractor;

Given('Launch Chrome Browser', async function () {
    learnProtractor= new LearnProtractor();
});

When('Google Website is opened browser', async function () {
    learnProtractor.launchBrowser();
});

Then('Title is Google', async function () {
    learnProtractor.checkTtile();
});
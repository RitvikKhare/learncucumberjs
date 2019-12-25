const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const LearnProtractor = require('../../lib/protractor/launchProtractor');

let learnProtractor;

Given('Launch Chrome Browser', async function () {
    learnProtractor= new LearnProtractor();
});

When('Google Website is opened browser',async function () {
     await learnProtractor.launchBrowser();
});

Then('Title is Google', async function () {
    if ( await learnProtractor.checkTitle()=='Super Calculator' )
    {
        console.log("------------------------------------ Text Matched")
    }
    else{
        console.log("------------------------------------ Text NOT Matched")
    }
});
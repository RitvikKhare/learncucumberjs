const assert = require('assert');
const { Before, Given, When , Then} = require ('cucumber');
const LearnProtractor = require('../../lib/protractor/launchProtractor');

let learnProtractor;

Given('Launch Chrome Browser', async function () {
    learnProtractor= new LearnProtractor();
});

When('Super Calculator Website is opened browser',async function () {
     await learnProtractor.launchBrowser();
});

Then('Title is Super Calculator', async function () {
    if ( await learnProtractor.checkTitle()=='Super Calculator' )
    {
        console.log("------------------------------------- Text Matched")
    }
    else{
        console.log("------------------------------------- Text NOT Matched")
    }
});

Then('Enter number 6 in First Box' ,async function(){
    await learnProtractor.enterFirstnum("6");
});

Then('Select plus operator from dropdown', async function(){
return "pending";
});

Then('Enter number 20 in Second Box' ,async function(){
    await learnProtractor.holdNextAction(5);
    await learnProtractor.enterSecondnum("20");
});

Then('Click Go button',async function(){
     await learnProtractor.clickGo();
});
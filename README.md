# learncucumberjs

[Cucumber](https://cucumber.io) is a tool for running automated tests written in plain language. Because they're
written in plain language, they can be read by anyone on your team. Because they can be
read by anyone, you can use them to help improve communication, collaboration and trust on
your team.

Cucumber.js is the JavaScript implementation of Cucumber and runs on the [maintained Node.js versions](https://github.com/nodejs/Release) and *modern* web browsers.

## What am Trying
Am trying to create a Framework with Cucumber that supports
 - Cucumber test execution for 
     + UI automation with Protractor
     + Service API automation with Available libraries

## TO DOs
1. Include Await/Async code to handle the service call in serviceCall.js to wait for service call to complete and then perform When action
2. Include Protractor Library for UI automation
3. Include code for renaming the .json and . html report to current data and execution time to get multiple reports in same folder.
4. Include TypeScript code matching to the serviceCall.js and calculator.js.

## Current State
- Able to execute tests with cucumberjs.
- Get cucumber report json.
- Covert the report json to HTML cucumber report.

## Requirements
- Visual Studio code 
- nodeJS ( link )
- Cucumber
- node-fetch

## Install & CLIs
1. Create a folder on drive. 
2. Open the folder in the Visual Studio Code
3. Run Command - 
    $ git clone https://github.com/RitvikKhare/learncucumberjs.git
    It will ask for login, provide username & password.
4. After repo is downloaded go inside folder learncucumberjs
    $ cd learncucumberjs
5. Run 
    $ npm install
    This will download all required depedencies mentioned in package.json under "node_modules" folder. 
6. Create a folder with name "report" on the same level as lib and features ( to save the report files)
7. Run command to execute test
    $ npm run execute-test
    This will create a output.json folder in "report" folder
8. Run command
    $ node index.js
    This will create cucumber-report.html in report folder and open browser with HTML report.

##.gitignore
Don't includes 
- report/*.html 
- report/*.json
- node_modules

## Learning Links 
https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

## Notes
1. Internet Explorer downloads IE server.exe - "webdriver-manager update --ie" , put browsercapabilities as "internet explorer".
2. If we don't put browser in protractor config. by default it will work with Chrome.
3. browser.waitForAngularEnabled(false) for non angular apps.
4. for Jasmine - any function should be inside describe block to be used.

## Issues 
1. Safari is not launching with Protractor
2. With Cucumber files, promises are not getting resolved. browser is running independent of assertions.

# learncucumberjs

[Cucumber](https://cucumber.io) is a tool for running automated tests written in plain language. Because they're
written in plain language, they can be read by anyone on your team. Because they can be
read by anyone, you can use them to help improve communication, collaboration and trust on
your team.

Cucumber.js is the JavaScript implementation of Cucumber and runs on the [maintained Node.js versions](https://github.com/nodejs/Release) and *modern* web browsers.

## What's on ?
Am trying to create a Framework with Cucumber that supports
 - Cucumber test execution for 
     + UI automation with Protractor, 
     + using TypeScript for Desktop and Mobile View.
     + Service API automation.

## What's done ?
What different folder are for ( learning / practicing / POC )
 - (A) codepracticejs : is for JS code.
 - (B) codepracticets : is for TS code. Compile the code into the codepracticets/js file and execute to test the code.
 - (C) protractorCucumber : for Protractor with CucumberJS.
    + (I) protractorCucumber/jsScripts : with JS steps definitions and config file.
    + (II) protractorCucumber/tsScripts : with TS steps definitions and config file.
 - (D) protractorJasmine : for Protractor with Jasmine.
    + protractorJasmine/jsScriptSpecs : with JS steps definitions and config file.
    + protractorJasmine/tsScriptSpecs : with TS steps definitions and config file.

## Requirements
- Visual Studio code 
- nodeJS ( link )
- Cucumber
- node-fetch

## Install & CLIs
There are more files and folders then required. As it has a learning path as well.
JavaScript > Protractor > Jasmine > CucumberJS > TypeScript > Desktop Automation > Mobile Automation > Tool Integration > Coverages.

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
7. Different Script/CLI for running different folder code
 + (A)
 + (B)
 + (C) Running invidual folder 
    + (I) 
    + (II) Running code basic
      - Correct Code as docs/fixes.md
      - npm run webdriver-update | this is done for updating drivers in local scope. 
      - npm run build-cucumber | build cucumber ts files into js files.
      - copy compiledJS/steps-definition/firstProtractor-steps.js to features/steps-definition/ folder. ( this is temp will be resolved with cucumber-config.ts with steps aggregate ).
      - npm run execute-cucumber

 + (D)
    Run command to execute test
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

# Path = lib/protractorCucumber/tsScripts/utility/utility.ts

1. Utility.ts is built to read json files in a folder to log the content of the jsons.
2. Need to enhance the analytics i.e. collecting data from each file and collecting information from each key and list how many such content is present.
3. Doing so - we can read all the jsons files ( data coverage )
4. Also put logic for reading all the feature files to know what is covered. ( functional coverage perspective )

# What is working now ?

1. need to go to lib/protractorCucumber/tsScripts/compiledJS folder to run below commands.
2. node ./utility/utilities.js
    * reason the ../ path is getting read only one level up. e.g. obj.readJsonFile('../cdata.json'); obj.readJsonFile('../testData/dData.json');. it is not going .../ level.
    * respective absolute path needs to be put in calling function for resolution.

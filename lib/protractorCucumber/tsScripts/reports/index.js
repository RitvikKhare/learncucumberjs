var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './lib/protractorCucumber/tsScripts/reports/jsons/cucumberReport.json',
        output: './lib/protractorCucumber/tsScripts/reports/htmls/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.0.1",
            "Test Environment": "STAGING",
            "Browser": "Chrome  80",
            "Platform": "Mac OS High Serria",
            "Parallel": "Scenarios",
            "Executed": "Direct"
        }
    };
 
    reporter.generate(options);
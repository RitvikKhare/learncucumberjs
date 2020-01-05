exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./lib/protractor/spec3_actionsJasmine.js'],
    capabilities: {
      'browserName': 'chrome'
    }
  };
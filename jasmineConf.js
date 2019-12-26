exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./lib/protractor/spec1_Jasmine.js'],
    capabilities: {
      'browserName': 'chrome'
    }
  };
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'learncucumberjs/features/browserLaunch.feature'
    ],
  
    baseURL: 'http://www.google.co.in/',
  
    cucumberOpts: {
      require: 'learncucumberjs/features/step_definition/browserLaunch-steps.js',
      tags: false,
      format: ['progress', 'pretty:output.txt'],
      profile: false,
      'no-color': true
    }
  };
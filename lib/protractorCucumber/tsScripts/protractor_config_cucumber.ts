import {Config} from 'protractor';

export let config: Config =
{
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect:true,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      '../features/firstProtractor.feature'
    ],
    
    cucumberOpts: {
      require: [
        './stepsDefinition/*.js'
      ]
    }    
  };
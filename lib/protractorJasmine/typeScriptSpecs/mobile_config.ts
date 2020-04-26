exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
  
    specs: ['firstTSspec.js'],
  
    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
      browserName: 'chrome',
      platformName: 'Android',
      platformVersion: '10.0',
      deviceName: 'Pixel3API29',
    },
  
    baseUrl: 'http://10.0.2.2:8000'
  };
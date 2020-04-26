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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlX2NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vYmlsZV9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNiLGVBQWUsRUFBRSw4QkFBOEI7SUFFL0MsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7SUFFekIseUdBQXlHO0lBQ3pHLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFVBQVUsRUFBRSxhQUFhO0tBQzFCO0lBRUQsT0FBTyxFQUFFLHNCQUFzQjtDQUNoQyxDQUFDIn0=
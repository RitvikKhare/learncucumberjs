"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect: true,
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
            './features/step_definitions/*.js',
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvcl9jb25maWdfY3VjdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcm90cmFjdG9yX2NvbmZpZ19jdWN1bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVXLFFBQUEsTUFBTSxHQUNqQjtJQUNJLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFFRCxnREFBZ0Q7SUFDaEQsS0FBSyxFQUFFO1FBQ0wscUNBQXFDO0tBQ3RDO0lBRUQsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFO1lBQ1Asa0NBQWtDO1NBQ25DO0tBQ0Y7Q0FDRixDQUFDIn0=
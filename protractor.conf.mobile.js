exports.config = {
    seleniumAddress: "http://localhost:4723/wd/hub",

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'emulator-5554'
    },

    specs: [
        'test/specs/bookSearch.spec.js'
    ],

    onPrepare: () =>{
        browser.waitForAngularEnabled(false);
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

};
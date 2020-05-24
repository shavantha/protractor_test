exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        directConnect: true,
        useAutomationExtension: true,
        args: ['--disable-gpu','-disable-dev-shm-usage','--no-sandbox','-disable-popup-blocking','--start-maximized','--disable-web-security','--allow-running-insecure-content','--disable-infobars']
    },
    specs: [
        './test/login_spec.js'
    ],
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts:{
        showColors: true,
        print: function () {},
        defaultTimeoutInterval: 30000
    }
  }
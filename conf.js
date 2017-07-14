exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
    {
      'browserName' : 'chrome'
    },
    // {
    //   'browserName' : 'firefox'
    // }
  ],

  onPrepare: function () {
    browser.driver.manage().window().setSize(1000, 800);
  },

  specs:
  // ['todo-spec.js'],
  // ['zoo-spec.js'],
  // ['zoo_select.js'],
    // ['zoo_exp.js'],
    // ['zoo_before.js'],
  ['zoo_css.js'],


  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};

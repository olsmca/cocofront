// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/angular.md#angular
module.exports = function(config) {
  config.set({
    mutate: [
      "src/**/*.ts",
      "!src/**/*.spec.ts",
      "!src/test.ts",
      "!src/environments/*.ts"
    ],
    mutator: "typescript",
    testRunner: "karma",
    logLevel: 'trace',
    karma: {
      configFile: "karma.conf.js",
      projectType: "angular-cli",
      config: {
        browsers: ["ChromeHeadless"]
      }
    },
    reporters: ["html", "clear-text", "progress", "dashboard"],
    maxConcurrentTestRunners: 4, // Recommended to use about half of your available cores when running stryker with angular.
    coverageAnalysis: "off"
  });
};

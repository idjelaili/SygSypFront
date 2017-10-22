// Karma configuration
// Generated on 2016-11-27

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-local-storage/dist/angular-local-storage.js',
      'app/bower_components/angular-recaptcha/release/angular-recaptcha.js',
      'app/bower_components/angularjs-slider/dist/rzslider.js',
      'app/bower_components/qrcode-generator/js/qrcode.js',
      'app/bower_components/qrcode-generator/js/qrcode_UTF8.js',
      'app/bower_components/angular-qrcode/angular-qrcode.js',
      'app/bower_components/angular-upload/angular-upload.js',
      'app/bower_components/angular-filter/dist/angular-filter.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/jspdf/dist/jspdf.debug.js',
      'app/bower_components/angular-base64/angular-base64.js',
      'app/bower_components/rangy/rangy-core.js',
      'app/bower_components/rangy/rangy-classapplier.js',
      'app/bower_components/rangy/rangy-highlighter.js',
      'app/bower_components/rangy/rangy-selectionsaverestore.js',
      'app/bower_components/rangy/rangy-serializer.js',
      'app/bower_components/rangy/rangy-textrange.js',
      'app/bower_components/textAngular/dist/textAngular.js',
      'app/bower_components/textAngular/dist/textAngular-sanitize.js',
      'app/bower_components/textAngular/dist/textAngularSetup.js',
      'app/bower_components/ng-csv/build/ng-csv.min.js',
      'app/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'app/bower_components/highcharts/highcharts.js',
      'app/bower_components/chart.js/dist/Chart.js',
      'app/bower_components/angular-chart.js/dist/angular-chart.js',
      'app/bower_components/js-xlsx/dist/xlsx.core.min.js',
      'app/bower_components/xlsx-model/xlsx-model.js',
      'app/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
      'app/bower_components/flow.js/dist/flow.js',
      'app/bower_components/ng-flow/dist/ng-flow.js',
      'app/bower_components/angular-base64-upload/src/angular-base64-upload.js',
      'app/bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
      'app/bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};

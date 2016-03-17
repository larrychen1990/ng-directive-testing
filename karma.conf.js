// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

      // our app
      'js/*.js',

      // tests
      'test/*.js',

      // templates
      'js/*.html',
      'tpl/*.html',
    ],

    // generate js files from html templates
    preprocessors: {
      'tpl/*.html': ['ng-html2js']
    },
    
    ngHtml2JsPreprocessor: {
        // strip this from the file path
//        stripPrefix: '../',
//        stripSuffix: '.ext',
        // prepend this to the
        prependPrefix: '../',

//        // or define a custom transform function
//        // - cacheId returned is used to load template
//        //   module(cacheId) will return template at filepath
//        cacheIdFromPath: function(filepath) {
//          // example strips 'public/' from anywhere in the path
//          // module(app/templates/template.html) => app/public/templates/template.html
//          var cacheId = filepath.strip('public/', '');
//          return cacheId;
//        },

        // - setting this option will create only a single module that contains templates
        //   from all the files, so you can load them all with module('foo')
        // - you may provide a function(htmlPath, originalPath) instead of a string
        //   if you'd like to generate modules dynamically
        //   htmlPath is a originalPath stripped and/or prepended
        //   with all provided suffixes and prefixes
        moduleName: 'templates'
      },

    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    
    plugins : [
               'karma-chrome-launcher',
               'karma-firefox-launcher',
               'karma-jasmine',
               'karma-junit-reporter',
   	        'karma-ng-html2js-preprocessor'
               ],

       junitReporter : {
         outputFile: 'test_out/unit.xml',
         suite: 'unit'
       }
    
  });
};

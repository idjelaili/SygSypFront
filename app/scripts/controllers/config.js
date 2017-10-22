'use strict';

/**
 * @ngdoc function
 * @name OFSApp.service:resource
 * @description
 * # REST serveice for administrator
 * RESTful service of the OFSApp
 */
  angular.module('sygsyp.config', [])
    .constant('config', {
      backend : '/sigSipBack/index.php'
   // backend : 'http://alwaysdata.net/sigSipBack/index.php'
    });
    // .constant('config', CONFIG.production);
    /*.constant('config', CONFIG.test);*/
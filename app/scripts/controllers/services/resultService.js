'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('serviceResult',[])
  .factory('ResultService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      getResults : function (data, success, fail){
        $http.get(config.backend+'/visualiseResult')
        .then(success,fail);
      },
      getResultsEntreprise : function (data, success, fail){
        $http.get(config.backend+'/testsCollaborateurs')
        .then(success,fail);
      },
      getResultForPDF : function (data, success, fail){
        $http.get(config.backend+'/getPdf', {params:data})
        .then(success,fail);
      },
      updateComment : function (data, success, fail){
        $http.post(config.backend+'/commentaire', data)
        .then(success,fail);
      }
    };
  }]);

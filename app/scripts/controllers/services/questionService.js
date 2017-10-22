'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('serviceQuestion',[])
  .factory('QuestionService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      getQuestion : function (data, success, fail){
        $http.get(config.backend+'/question','')
        .then(success,fail);
      },
      enregistrerTest : function (data, success, fail){
        $http.post(config.backend+'/question',data)
        .then(success,fail);
      }
    };
  }]);

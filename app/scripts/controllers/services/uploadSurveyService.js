'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('serviceUploadSurvey',[])
  .factory('UploadSurveyService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      recupQuestionnaireList : function (data, success, fail){
        $http.get(config.backend+'/questionnaires')
        .then(success,fail);
      },
      envoyerQuestionnaire : function (data, success, fail){
        $http.post(config.backend+'/chargerQuestionnaire',data)
        .then(success,fail);
      },
      defaultQuestionnaire : function (data, success, fail){
        $http.post(config.backend+'/defautQuestionnaire',data)
        .then(success,fail);
      }
    };
  }]);

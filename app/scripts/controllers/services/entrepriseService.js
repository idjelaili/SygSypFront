'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('serviceEntreprise',[])
  .factory('EntrepriseService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      getEntreprisesWithoutConsultant : function (data, success, fail){
        $http.get(config.backend+'/getEntreprises')
        .then(success,fail);
      },
      getAllEntreprisesAssocie : function (data, success, fail){
        $http.get(config.backend+'/getAllEntreprisesAtribue')
        .then(success,fail);
      },
      attribuerEntreprise : function (data, success, fail){
        $http.post(config.backend+'/attacherEntreprise',data)
        .then(success,fail);
      },
      affecterQuestionnaire : function (data, success, fail){
        $http.post(config.backend+'/setQuestionnaireEntreprise',data)
        .then(success,fail);
      },
      recupQuestionnaireList : function (data, success, fail){
        $http.get(config.backend+'/questionnaires')
        .then(success,fail);
      },
      resultsEntreprises : function (data, success, fail){
        $http.get(config.backend+'/getResultsEntreprise', {params : data})
        .then(success,fail);
      },
      getArray : function (data, success, fail){
        $http.get(config.backend+'/getCsv', {params : data})
        .then(success,fail);
      },
      updateComment : function (data, success, fail){
        $http.post(config.backend+'/commentaire', data)
        .then(success,fail);
      }
    };
  }]);

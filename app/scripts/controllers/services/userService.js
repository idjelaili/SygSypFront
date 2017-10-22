'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('serviceSigSyp',[])
  .factory('UserService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      getUserByEmail : function (data, success, fail){
        $http.get(config.backend+'/user')
        .then(success,fail);
      },
      updateUserMail : function (data, success, fail){
        $http.post(config.backend+'/user', data)
        .then(success,fail);
      },
      createUser : function(data, success, fail){
        $http.post(config.backend+'/inscription',data)
        .then(success, fail);
      },
      getConnection : function(data, success, fail){
        $http.get(config.backend+'/connection', {params : data})
        .then(success, fail);
      },
      getConsultant : function(data, success, fail){
        $http.get(config.backend+'/inscription')
        .then(success, fail);
      },
      getOtherMdp : function(data, success, fail){
        $http.get(config.backend+'/initialiserMdp', {params : data})
        .then(success, fail);
      },
      gererConsultant : function(data, success, fail){
        $http.post(config.backend+'/gererConsultant', data)
        .then(success, fail);
      },
      createCompany : function(data, success, fail){
        $http.post(config.backend+'/createEntreprise',data)
        .then(success, fail);
      },
      getConsultantActif : function(data, success, fail){
        $http.get(config.backend+'/getConsultantActif',data)
        .then(success, fail);
      }
    };
  }]);


/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('parameterService',[])
  .factory('ParameterService',["$http","$httpParamSerializer",'config', function ($http,$httpParamSerializer,config) {
    return {
      saveNewPwd : function(data, success, fail){
        $http.post(config.backend+'/parameter/password',data)
        .then(success, fail);
      },
      getInfoUser : function(data, success, fail){
        $http.get(config.backend+'/parameter/names').then(success,fail);
      },
      saveNewName : function(data, success, fail){
        $http.post(config.backend+'/parameter/names', data).then(success,fail);
      },
      getCompanyInfo : function(data, success, fail){
        $http.get(config.backend+'/parameter/company').then(success,fail);
      },
      updateCompanyInfo : function(data, success, fail){
        $http.post(config.backend+'/parameter/company', data).then(success,fail);
      },
      getHeaderFooter : function(data, success, fail){
        $http.get(config.backend+'/getHeaderFooter').then(success,fail);
      },
      updateHeaderFooterConsultant : function(data, success, fail){
        $http.post(config.backend+'/setHeaderFooter', data).then(success,fail);
      }

    };
  }]);

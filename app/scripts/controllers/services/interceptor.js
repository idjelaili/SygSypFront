'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.service:UserService
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('interceptorService',[])
  .service('APIInterceptor',["localStorageService","$q","$injector", "config",function (localStorageService,$q,$injector, config) {
    var service = this;
      service.request = function(config) {
        var urlRegex = /\.html/;
        if(!urlRegex.test(config.url)){
          if(localStorageService.get('token')){
            config.headers.Authorization = localStorageService.get('token');
          }
        }
        return config;
      };
      service.responseError = function(response) {
        if(response.status === 401 || response.status === 403){
          $injector.get('$state').go('connection');
        }
        return $q.reject(response);
      };
      service.response = function(response){
        return $q.resolve(response);
      }

  }]);

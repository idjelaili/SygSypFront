'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('parameterGestController', [])
  .controller('ParameterGestCtrl',['$scope','ParameterService',function ($scope, UserService,ParameterService) {
    $scope.parameterGest = {
      nom:'',
      prenom:'',
      mail:'',
      oldpwd:'',
      newpwd:'',
      pwdConfirm:'',
      entreprise:'',
      adresse:'',
      codeentreprise:'',
      codepostal:'',
      tel:'',
      ville:''
      };

      var test = true;
     $scope.erreurPWD = false;
     $scope.erreurPWDsame = false;
     $scope.subscribe = function() {
           if($scope.parameterGest.newpwd !== $scope.parameterGest.pwdConfirm){
             $scope.erreurPWD= true;
             test=false;
           }

           if($scope.parameterGest.oldpwd === $scope.parameterGest.newpwd){
             $scope.erreurPWDsame= true;
             test=false;
           }

           if (test===true)
           {
          ParameterService.saveParameter($scope.parameterGest, function(data){
             }, function(data){
             });
           }
         }

}]);

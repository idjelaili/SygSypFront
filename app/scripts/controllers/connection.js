'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('sigSipApp')
.controller('ConnectionCtrl',["$scope","$rootScope","UserService","localStorageService","$state", "$timeout","$stateParams",
function ($scope,$rootScope,UserService,localStorageService,$state, $timeout, $stateParams) {
  localStorageService.clearAll();
  if('obj' in $stateParams  ){

    if('mailEnvoye' in $stateParams.obj){
      $scope.mailEnvoye=$stateParams.obj.mailEnvoye;
      $stateParams.obj = {};
    }
    if('mailNonEnvoye' in $stateParams.obj){
      $scope.mailNonEnvoye=$stateParams.obj.mailNonEnvoye;
      $stateParams.obj = {};

    }
  }
  $scope.dataConnection = {
    email:'',
    pwd:''
  };

  $scope.dataReinitMdp = {
    email:''
  };

  $scope.erreurConnexion=false;

  $scope.connect = function() {
    $scope.erreurMdpLong=false;
    $scope.erreurConnexion=false;
    if ($scope.dataConnection.pwd == undefined){
      $scope.erreurMdpLong=true;
    }
    else if ($scope.dataConnection.email != '' && $scope.dataConnection.pwd != ''){
      UserService.getConnection($scope.dataConnection, function(result){
        localStorageService.set('token', result.data.token);
        localStorageService.set('role', result.data.role);
        $scope.$emit("connected", {connect : true});
        $scope.role = localStorageService.get('role');
        if ($scope.role == 'Associe'){
          $state.go('question');
        } else if ($scope.role == 'Dirigeant'){
          $state.go('testsCollaborateurs');
        } else if ($scope.role == 'Consultant'){
          $state.go('entreprises');
        } else if ($scope.role == 'Admin'){
          $state.go('consultants');
        }
      }, function(data){
        $scope.erreurConnexion=true;
        $scope.message=data.data;
      });
    }
  }

  $scope.reinitMdp = function() {
    if ($scope.dataReinitMdp.email != ''){

      UserService.getOtherMdp($scope.dataReinitMdp, function(result){
        $state.go('popUpReinitMdp', {obj : {mailEnvoye:true}});
      }, function(data){
        $state.go('popUpReinitMdp', {obj : {mailNonEnvoye:true}});

      });
    }
  }

  $scope.seConnecter = function() {
    $state.go('connection');
  }

  $scope.sInscrire = function() {
    $state.go('inscription');
  }

}]);

'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('addCompanyController', ['serviceSigSyp','frapontillo.bootstrap-switch','ui.bootstrap'])
  .controller('AddCompanyCtrl',['$scope', '$state', 'UserService', function ($scope, $state, UserService) {

    $scope.company = {
      mailUtilisateur:'',
      nomUtilisateur:'',
      prenomUtilisateur:'',
      mdpUtilisateur:'',
      confirmationDePasse:'',
      nomEntreprise:'',
      telephone:'',
      adresse1:'',
      adresse2:'',
      codePostal:'',
      ville:''
    };

    $scope.comparePasswords = false;

    $scope.comparePasswords = function () {
      if($scope.company.mdpUtilisateur !== $scope.company.confirmationDePasse) {
        return false;
      }
      else {
        return true;
      }
    }

    $scope.addCompany = function() {
      $scope.erreurAddCompany=false;
      UserService.createCompany($scope.company, function(data){
        $state.go('entreprises');
      }, function(data){
        $scope.erreurAddCompany=true;
        $scope.messageErreurAddCompany=data.data;
      });
      return true;
    }

  }]);

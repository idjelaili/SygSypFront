'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('consultantsController', ['serviceSigSyp'])
  .controller('ConsultantsCtrl',['$scope', 'UserService', function ($scope, UserService) {

    $scope.consultant = {
      mailUtilisateur:'',
      nomUtilisateur:'',
      prenomUtilisateur:'',
      mdpUtilisateur:'',
      code:'20170101125359789',
      confirmationDePasse:'',
      groupe:'',
      nomEntreprise:'',
      mailConsultant:'',
      entrepriseConsultant:''
    };

    $scope.createConsultant = function() {
      $scope.successChanged = false;
      $scope.errorOccurs = false;
      $scope.erreurMotDePasse = false;
      $scope.erreurEntreprise = false;
      if($scope.consultant.mdpUtilisateur != $scope.consultant.confirmationDePasse && ($scope.consultant.mdpUtilisateur != '' && $scope.consultant.confirmationDePasse !='')){
        $scope.erreurMotDePasse = true;
      }
      if ($scope.consultant.entrepriseConsultant == '') {
    	  $scope.erreurEntreprise = true;
      }
      else {
        UserService.createUser($scope.consultant, function(data){
          $scope.successChanged = true;
          $scope.rechercheConsultants();
        }, function(data){
          $scope.errorOccurs = true;
          $scope.messageErrorInscriptionConsultant = data.data;
        });
      }
    }

    $scope.rechercheConsultants = function() {
      UserService.getConsultant(null, function(data){
          $scope.consultants = data.data;
          angular.forEach($scope.consultants, function(value, key){
            if (value.actif == 1){
              value.activate = true;
            } else {
              value.activate = false;
            }
          });
        }, function(data){
        });
    };
    $scope.rechercheConsultants();

   $scope.gererConsultant = function (activate, mail){
     $scope.data = {
       mailUtilisateur : '',
       actif : ''
     }
     $scope.data.mailUtilisateur = mail;
     if (activate == true){
       $scope.data.actif = 1;
     } else {
       $scope.data.actif = 0;
     }
     
     UserService.gererConsultant($scope.data, function(data){
        }, function(data){
        });
  }


  }]);

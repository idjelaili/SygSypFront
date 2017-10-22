'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('inscriptionController', ['serviceSigSyp','vcRecaptcha','frapontillo.bootstrap-switch','ui.bootstrap'])
  .controller('InscriptionCtrl',['$scope', 'toastr','UserService','$state', function ($scope,toastr, UserService,$state ) {
    $scope.gRecaptchaResponse = false;
    $scope.inscription = {
      mailUtilisateur:'',
      nomUtilisateur:'',
      prenomUtilisateur:'',
      mdpUtilisateur:'',
      code:'',
      confirmationDePasse:'',
      groupe:'',
      nomEntreprise:'',
      mailConsultant:''
    };
    $scope.isDirigeant = true;
    $scope.regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      UserService.getConsultantActif(null, function(data){
          $scope.consultantList = [];
          $scope.consultantList.push({mailUtilisateur:'aucunConsultant', libelleSelect:'Aucun consultant'});
          $scope.selectedConsultant = $scope.consultantList[0];
          $scope.inscription.mailConsultant = '';
          angular.forEach(data.data, function(value, key){
            var consultant = {};
            consultant.mailUtilisateur = value.mailUtilisateur;
            consultant.logo = value.header;
            consultant.libelleSelect = value.entrepriseConsultant+' - '+value.prenomUtilisateur+' '+value.nomUtilisateur;
            $scope.consultantList.push(consultant);

          });
          $scope.consultants = data.data;
        }, function(data){
          console.error("Cannot reach the server");

        });
    $scope.changingConsultant = function(){
      if($scope.selectedConsultant.mailUtilisateur === 'aucunConsultant'){
        $scope.inscription.mailConsultant = '';
        $scope.imageConsultant = null;
        return;
      }
      $scope.inscription.mailConsultant = $scope.selectedConsultant.mailUtilisateur;
      $scope.imageConsultant = $scope.selectedConsultant.logo;
    }


    $scope.subscribe = function() {
      $scope.messageErrorInscription = false;
      if(!$scope.gRecaptchaResponse){
        $scope.messageErrorInscription = true;
        $scope.messageErrorInscription = 'Vous devez remplir le captcha.';
        toastr.error('Vous devez remplir le captcha.');

      }else{
        UserService.createUser($scope.inscription, function(data){
          $state.go('connection');
          toastr.success("Inscription réussite !");
        }, function(data){
          $scope.messageErrorInscription = true;
          $scope.messageErrorInscription = data.data;
          toastr.error(data.data);

        });

      }

    }
    $scope.comparePasswords = function () {
      if($scope.inscription.mdpUtilisateur !== $scope.inscription.confirmationDePasse) {
        return false;
      }
      return true;
    }
    $scope.resetFormsOnSwitch = function(){
      if($scope.isDirigeant) {
        $scope.inscription.nomEntreprise = '';
        $scope.selectedConsultant = $scope.consultantList[0];
        $scope.changingConsultant();
        $scope.messageErrorInscription = false;
        return;
      }
      $scope.messageErrorInscription = false;
      $scope.inscription.code = '';
    }

    $scope.isNotValidCaptcha = function(){
      if ($scope.gRecaptchaResponse == true){
        return false;
      }
      return true;
    }
  }]);

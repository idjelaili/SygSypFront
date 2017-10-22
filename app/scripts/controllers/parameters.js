'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('parametersController', ['ui.bootstrap'])
.controller('ParameterCtrl',['$scope','UserService','ParameterService','localStorageService',
function ($scope, UserService,ParameterService,localStorageService) {
  $scope.namesParams = {nom:'', prenom:''};
  $scope.passwordParams = {oldPwd:'',newPwd:'',pwdConfirm:''};
  $scope.consultantParams = {};
  $scope.companyParams = {};
  $scope.successChanged = false;
  $scope.errorOccurs = false;
  $scope.userRole = localStorageService.get('role');

  /************** RECUPERATION NOM & PRENOM ********/
  ParameterService.getInfoUser(null, function(data){
    $scope.namesParams.nom = data.data.nomUtilisateur;
    $scope.namesParams.prenom = data.data.prenomUtilisateur;

    /************** UPDATE NAMES ********/
    $scope.changeName = function(){
      for(var key in $scope.namesParams){
        $scope.namesParams[key] = $scope.namesParams[key].replace(/ /g, '');
      }
      if($scope.namesParams.nom.length < 3 || $scope.namesParams.prenom.length < 3 ){
        $scope.paramsNamesEmptyError = true;
      }else{
          ParameterService.saveNewName($scope.namesParams, function(data){
          $scope.successChanged = true;
          $scope.errorOccurs = false;
          $scope.paramsNamesEmptyError = false;

        }, function(data){
          $scope.errorOccurs = true;
          $scope.successChanged = false;
          $scope.error = data.data;

        });

      }

    }
    /************** UPDATE PASSWORD ********/
    $scope.changePassword = function(){
      for(var key in $scope.passwordParams){
        $scope.passwordParams[key] = $scope.passwordParams[key].replace(/ /g, '');
      }
      if(($scope.passwordParams.newPwd === $scope.passwordParams.pwdConfirm)
       && $scope.passwordParams.newPwd.length >= 4 && $scope.passwordParams.pwdConfirm.length >= 4){
         $scope.diffrentPwdError = false;
         $scope.pwdTooShortError = false;

        ParameterService.saveNewPwd($scope.passwordParams, function(data){
          $scope.successChanged = true;
          $scope.errorOccurs = false;
          $scope.passwordParams = {};
        }, function(data){
          $scope.errorOccurs = true;
          $scope.successChanged = false;
          $scope.error = data.data;


        });

      }else if (($scope.passwordParams.newPwd !== $scope.passwordParams.pwdConfirm)) {
        $scope.diffrentPwdError = true;
        $scope.pwdTooShortError = false;

      }else {
        $scope.pwdTooShortError = true;
        $scope.diffrentPwdError = false;


      }
    }
  }, function(error){
    $scope.errorOccurs = true;
    $scope.successChanged = false;
    $scope.error = error.data;



  });
  $scope.regexInputPhone = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
  $scope.showErrorInput = false;
  $scope.$watch('companyParams.phoneNumber', function(newValue, oldValue){
    if(!$scope.regexInputPhone.test($scope.companyParams.phoneNumber)){
      $scope.showErrorInput = true;
    }else {
      $scope.showErrorInput = false;

    }

  });
  if($scope.userRole === 'Dirigeant'){
    ParameterService.getCompanyInfo(null, function(data){
      $scope.companyParams.company = data.data.nomEntreprise;
      $scope.companyParams.companyCode = data.data.code;
      $scope.companyParams.address = data.data.adresse1;
      $scope.companyParams.addressComp = data.data.adresse2;
      $scope.companyParams.postalCode = data.data.codePostal;
      $scope.companyParams.city = data.data.ville;
      $scope.companyParams.phoneNumber = data.data.telephone;
      $scope.updateCompany = function (){
        ParameterService.updateCompanyInfo($scope.companyParams, function(data){
          $scope.successChanged = true;
          localStorageService.set('token',data.data);
        }, function(error){
          $scope.errorOccurs = true;
          $scope.successChanged = false;

        });

      }
    }, function(error){
      $scope.errorOccurs = true;
      $scope.successChanged = false;
      $scope.error = error.data;

    });
  }

  UserService.getUserByEmail(null, function(response){
    $scope.mailUtilisateur = response.data;
    $scope.mailErrorInput = false;
  }, function(error){
    $scope.errorOccurs = true;
    $scope.successChanged = false;
    $scope.error = error.data;

  });

  $scope.updateEmailUser = function(mail){
    var utilisateur = { mailUtilisateur : mail};

    var regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(regexEmail.test(utilisateur.mailUtilisateur)){
      $scope.mailErrorInput = false;
      UserService.updateUserMail(utilisateur, function(response){
        $scope.successChanged = true;
        $scope.errorOccurs = false;
        localStorageService.set('token',response.data);
      }, function(error){
        $scope.errorOccurs = true;
        $scope.successChanged = false;
        $scope.error = error.data;

      });
    }else{
      $scope.mailErrorInput = true;
    }
  }
  $scope.setSuccessFalse = function(){
    $scope.successChanged = false;
    $scope.errorOccurs = false;
  }

}]);

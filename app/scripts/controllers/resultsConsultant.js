'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('resultsConsultantController', ['serviceSigSyp'])
.controller('ResultsConsultantCtrl',["$scope","UserService",function ($scope, UserService) {

  $scope.error = false;

  $scope.results = [
    {entreprise:'MyCompany', date:'20/01/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALALLALALALALALALALALAL',
    commentConsultant:'LALALALALALALALALALAL'},
    {entreprise:'WorldCompany', date:'20/01/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALALLALALALALALALALALAL',
    commentConsultant:'BLBLALALALALALALALALALALALALAL'},
    {entreprise:'MyCompany', date:'30/01/2017', lien:'monliendutest',
    commentUser:'',
    commentConsultant:'BLBLALALALALALALALALALALALALAL'},
    {entreprise:'WorldCompany', date:'26/02/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALALLALALALALALALALALAL',
    commentConsultant:'BLBLALALALALALALALALALALALALAL'},
    {entreprise:'MyCompany', date:'08/03/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALAALALAL',
    commentConsultant:'BLBLALALALALALALALALALALALALAL'},
    {entreprise:'WorldCompany', date:'15/04/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALALLALALALALALALALALAL',
    commentConsultant:''},
    {entreprise:'WorldCompany', date:'02/05/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALALLALALALALALALALALAL',
    commentConsultant:'BLBLALALALALALALALALAL'},
    {entreprise:'WorldCompany', date:'10/05/2017', lien:'monliendutest',
    commentUser:'BLBLALALALALALALAL',
    commentConsultant:'BLBLALALALALALALALALALALALALAL'}
  ];


  $scope.generatePDF =   function (result) {
  }

  $scope.subscribe = function() {
      UserService.createUser($scope.result, function(data){
      }, function(data){
      });

  }

}]);

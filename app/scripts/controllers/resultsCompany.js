'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('resultsCompanyController', ['serviceSigSyp'])
.controller('ResultsCompanyCtrl',["$scope","UserService",function ($scope, UserService) {
  $scope.company = {
    name:'World Company'
  };

  $scope.results = [
    {name:'Pierre Dupont', date:'20/01/2017', lien:'monliendutest'},
    {name:'Pierre Dupont', date:'20/01/2017', lien:'monliendutest'},
    {name:'Jean Philippe', date:'30/01/2017', lien:'monliendutest'},
    {name:'Pierre Dupont', date:'26/02/2017', lien:'monliendutest'},
    {name:'Jean Philippe', date:'08/03/2017', lien:'monliendutest'},
    {name:'Alfonse Martin', date:'15/04/2017', lien:'monliendutest'},
    {name:'Alfonse Martin', date:'02/05/2017', lien:'monliendutest'},
    {name:'Gregory Deschamps', date:'10/05/2017', lien:'monliendutest'}
  ];

  $scope.subscribe = function() {

      UserService.createUser($scope.result, function(data){
      }, function(data){
      });

  }

}]);

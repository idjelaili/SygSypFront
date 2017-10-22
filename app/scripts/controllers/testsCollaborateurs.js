'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('testsCollaborateursController', ['serviceSigSyp', 'ui.bootstrap'])
.controller('TestsCollaborateursCtrl',["$scope","ResultService",function ($scope, ResultService) {

  $scope.aucunResultEntreprise = false;

  $scope.entreprise = {
    nomEntreprise:'',
  }
  
  $scope.searchResultsEntreprise = function() {
    ResultService.getResultsEntreprise(null,function(data){  
        $scope.resultsEntreprise = data.data;
        if ($scope.resultsEntreprise == null) {
            $scope.aucunResultEntreprise = true;
            $scope.messageAucunResultEntreprise = data.message;
        }
    }, function(data){
    });
  }; 
  $scope.searchResultsEntreprise();

  $scope.generatePDF =   function (result) {
  }

}]);
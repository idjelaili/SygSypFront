'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('resultController', ['serviceSigSyp'])
.controller('ResultCtrl',["$scope","ResultService",'$state',function ($scope, ResultService,$state) {

  $scope.show = false;
  $scope.aucunResult = false;

  $scope.modificationCommentaire = [] ;

  $scope.rechercheResults = function() {
      ResultService.getResults(null,function(data){
          $scope.results = data.data;
          if ($scope.results.message != null){
            $scope.messageAucunResult=$scope.results.message;
            $scope.aucunResult = true;
          }
        }, function(data){
        });
    };
    $scope.rechercheResults();

  $scope.generatePDF = function (result) {
    var infoTest = {
      idTest : result,
    };
    $state.go('resultatPdf', {obj :infoTest });
  }

  $scope.modifComment = function() {
      $scope.changeComment = true;
  };

  $scope.updateComment = function(results){
    $scope.changeComment = false;

    for(var i=0; i< results.length; i++) {
        var modif = {};
        modif.idTest = results[i].idTest;
        modif.commentaire = results[i].commentaireUtilisateur;
        $scope.modificationCommentaire.push(modif);
      }

    ResultService.updateComment($scope.modificationCommentaire,function(data){
    }, function(data){
    });
  }

}]);

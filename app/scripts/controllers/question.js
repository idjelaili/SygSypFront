'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('questionsController', ['serviceQuestion','ui.bootstrap'])
.controller('QuestionCtrl',["$scope","QuestionService","localStorageService","$state",
function ($scope,QuestionService,localStorageService,$state) {

    $scope.reponsesTest = {
      commentaireUtilisateur:'',
      idQuestionnaire:'',
      listReponse:[]
    }

    $scope.comment = false;

    $scope.recuperationQuestion = function() {
      QuestionService.getQuestion(null, function(data){
          $scope.questionsList = [];
          for(var i=0; i< data.data.length; i++) {
            if (data.data[i].value == undefined){
              data.data[i].value = 0;
            }
          }
          $scope.questionsList = data.data;

          $scope.totalItems = $scope.questionsList.length;
          $scope.questionsListFilter = $scope.questionsList.slice(0, 9);
          $scope.currentPage = 1;
          $scope.maxSize = 5;
          $scope.numPerPage = 9;

        }, function(data){
        });
    };
    $scope.recuperationQuestion();

    $scope.slider = {
      options: {
        ceil: 10,
        hidePointerLabels: true,
        hideLimitLabels: true
      }
    };

    $scope.pageChanged = function(){
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;
      $scope.questionsListFilter = $scope.questionsList.slice(begin, end);
      if($scope.currentPage===3){
        $scope.comment= true;
      }
      else{
        $scope.comment= false;
      }
    }

    $scope.terminerQuestionnaire = function() {
      $scope.reponsesTest.idQuestionnaire = $scope.questionsList[0].idQuestionnaire;

      for(var i=0; i< $scope.questionsList.length; i++) {
        var response = {};
        response.idQuestion = $scope.questionsList[i].idQuestion;
        response.valeur = $scope.questionsList[i].value;
        $scope.reponsesTest.listReponse.push(response);
      }

    QuestionService.enregistrerTest($scope.reponsesTest, function(result){
      $state.go('visualiseResult');
    }, function(data){
    });
    }

}]);

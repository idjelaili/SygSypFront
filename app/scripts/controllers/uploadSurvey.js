'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('uploadSurveyController', ['serviceSigSyp'])
.controller('UploadSurveyCtrl',["$scope","toastr","UploadSurveyService",function ($scope, toastr, UploadSurveyService) {
  $scope.defaultQuestionnaires = {
    idQuestionnaire:'',
    libelleQuestionnaire:'',
  };

  $scope.excel={};

  $scope.envoyerQuestionnaire = function() {
           angular.element("input[type='file']").val(null);
   UploadSurveyService.envoyerQuestionnaire($scope.excel, function(data){
     // $scope.questionnaires = data.data;
     toastr.success(data.data);
      $scope.excel = null;
      $scope.searchQuestionnaires();
    }, function(data){
        toastr.error(data.data);
    });
  }
  $scope.testId = 0;
  $scope.searchQuestionnaires = function() {
    UploadSurveyService.recupQuestionnaireList(null, function(data){
      $scope.questionnaires = data.data;
      angular.forEach($scope.questionnaires, function(value, key){
            if (value.defaut == 1){
              $scope.testId = value.idQuestionnaire;              
            } else {
              
            }
          });
    }, function(data){
    });
  };
  $scope.searchQuestionnaires();

  $scope.defaultQuestionnaire = function (questionnaire, id) {
    $scope.testId = id;

    $scope.data = {
      idQuestionnaire:'',
      defaut:''
    }

    $scope.data.idQuestionnaire = questionnaire.idQuestionnaire;
    $scope.data.defaut = '1';

    UploadSurveyService.defaultQuestionnaire($scope.data, function(data){
      $scope.searchQuestionnaires();
      toastr.success(data.data.message);
    }, function(data){
      toastr.error(data.data.message);
    });
  }

}]);

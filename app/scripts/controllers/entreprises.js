'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('entrepriseController', ['serviceSigSyp', 'ui.bootstrap'])
.controller('EntreprisesCtrl',["$scope","toastr","$q","EntrepriseService", "$state",function ($scope, toastr, $q, EntrepriseService, $state) {

  $scope.entreprise = {
    nomEntreprise:'',
  }

  $scope.selectEntreprise = {
    nomEntreprise:'',
    questionnaire:''
  }

  $scope.modificationCommentaire = [] ;

  $scope.searchEntreprises = function() {
    EntrepriseService.getEntreprisesWithoutConsultant(null,function(data){
        $scope.entreprises = data.data;
      }, function(data){
      });
  };
  $scope.searchEntreprises();

  $scope.searchAllEntreprisesAssocie = function() {
    $scope.aucuneEntreprise = false;

    EntrepriseService.getAllEntreprisesAssocie(null,function(data){
      $scope.companies = data.data;
      if ($scope.companies.length != 0){
        EntrepriseService.recupQuestionnaireList(null, function(data){
          $scope.questionnaires = data.data;
          angular.forEach($scope.companies, function(value, key){
            var questions = [];
            for (var index = 0; index < $scope.questionnaires.length ; index++){
              questions.push($scope.questionnaires[index]);
              if(value.idQuestionnaire == $scope.questionnaires[index].idQuestionnaire){
                  value.activeQuestionnaire = $scope.questionnaires[index];
              }
            }
            value.questionnaires = questions;
            var defaultQuestionnaire = {};
            defaultQuestionnaire.idQuestionnaire = null;
            defaultQuestionnaire.libelleQuestionnaire = 'Questionnaire par défaut';
            value.questionnaires.push(defaultQuestionnaire);
          });
        }, function(data){
        });
        angular.forEach($scope.companies, function(value, key){
          value.aucunResultEntreprise = false;
          $scope.data={
            nomEntreprise :''
          }
          $scope.data.nomEntreprise = value.nomEntreprise;
            EntrepriseService.resultsEntreprises( $scope.data, function(data){
              value.resultsEntreprise = data.data.message;
              if (value.resultsEntreprise.length == 0) {
                value.aucunResultEntreprise = true;
              }
            }, function(data){
            });
          });
      }
      else {
        $scope.aucuneEntreprise = true;
      }
    }, function(data){
    });
  };
  $scope.searchAllEntreprisesAssocie();

  $scope.affecterQuestionnaire = function (index, activeQuestionnaire){
    $scope.data={
      nomEntreprise :'',
      idQuestionnaire :''
    }
    $scope.data.nomEntreprise = $scope.companies[index].nomEntreprise;
    $scope.data.idQuestionnaire = activeQuestionnaire.idQuestionnaire;
    EntrepriseService.affecterQuestionnaire($scope.data,function(data){
     toastr.success(data.data.message);
    }, function(data){
      toastr.error(data.data.message);
    });
    toastr.clear();
  }


  $scope.attribuerEntreprise = function() {
    EntrepriseService.attribuerEntreprise($scope.entreprise,function(data){
        $scope.searchAllEntreprisesAssocie();
        $scope.searchEntreprises();
      }, function(data){
      });
  };

  $scope.generatePDF =   function (id, companyName) {
    var infoTest = {
      idTest : id,
      nomEntreprise : companyName
    };
    $state.go('resultatPdf', {obj :infoTest });
  }

  $scope.csv = {
    idTest: '',
    nomEntreprise: ''
  };

  $scope.getArray = function (id, nom) {
    $scope.csv.idTest = id;
    $scope.csv.nomEntreprise = nom;
    var deferred = $q.defer();
    EntrepriseService.getArray($scope.csv, function (data) {
        deferred.resolve(data.data.message);
    }, function (data) {
    });
    return deferred.promise;
  };

  $scope.modifComment = function() {
      $scope.changeComment = true;
  };

  $scope.updateComment = function(results){
    $scope.changeComment = false;
    for(var i=0; i< results.length; i++) {
        var modif = {};
        modif.idTest = results[i].idTest;
        modif.commentaire = results[i].commentaireConsultant;
        $scope.modificationCommentaire.push(modif);
      }
    EntrepriseService.updateComment($scope.modificationCommentaire,function(data){
    }, function(data){
    });
  }


}]);

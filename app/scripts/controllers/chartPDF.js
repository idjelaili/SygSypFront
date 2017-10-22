'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('chartPDFController', ['serviceSigSyp','base64', 'chart.js'])
.config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    chartColors: ['#80A00f', '#80b6ff'],
    responsive: true
  });
}])
.controller('ChartPDFCtrl',['$scope','$base64','UserService','ResultService','$stateParams','$state','localStorageService'
,function ($scope, base64, UserService, ResultService, $stateParams,$state, localStorageService) {
  if('idTest' in $stateParams.obj){
  }else{
    if(localStorageService.get('role') === 'Consultant'){
      $state.go('entreprises');
    }else {
      $state.go('visualiseResult');

    }
  }
  $scope.generatingPDF = false;
  $scope.queryData = {
    idTest : $stateParams.obj.idTest,
    nomEntreprise : $stateParams.obj.nomEntreprise
  };
  $scope.options = {
    legend: {
      display: true,

    },
    scale :{
      ticks: {
        beginAtZero: true,
        min:0,
        max : 100,
        fontSize : 0
      },
      pointLabels: {
        fontSize: 12
      }
    }
  };
  $scope.series = ["Business", "Humain"];
  ResultService.getResultForPDF($scope.queryData, function(response){
    $scope.infoTest = response.data[0][0];
    $scope.data = [[],[]];
    angular.forEach(response.data[1], function(value, key){
      $scope.data[0].push(value.Business*10);
      $scope.data[1].push(value.Humain*10);
    });
    $scope.performanceCompatibility = [];
    angular.forEach(response.data[2], function(value, key){
      var objet = {
        compatibilite: 'images/',
        performance : 'images/'
      };
      objet.compatibilite = objet.compatibilite + value.compatibilite + '.svg';
      objet.performance = objet.performance + value.performance + '.svg';
      $scope.performanceCompatibility.push(objet);
    });
    $scope.footerAndHeader = response.data[3][0];
  }, function(error){
  });
  $scope.labels =['Leadership et vision', "Projet d'entreprise", 'Gouvernance et organisation',
  'Communication et collaboration', "Définition de l'offre", 'Modèle de revenu', 'Exécution et suivi', 'Agilité entrepreneuriale',
  'Innovation et créativité'];

  $scope.printPDF = function(){
    $scope.generate = function() {
      $scope.generatingPDF = true;
      return html2canvas($("#pdf"), {
        onrendered: function(canvas) {
          var dataURL = canvas.toDataURL({
            format: 'jpeg',
            quality: 1.0
          });
          var doc= new jspdf();
          doc.addImage(dataURL,'PNG',15, 10, 180, 280);
          var pdfName = "SYG_"+$scope.infoTest.nomEntreprise+"_"+$scope.infoTest.nomUtilisateur+"_"+$scope.infoTest.prenomUtilisateur+"_"+$scope.infoTest.dateTest;
          doc.save(pdfName+'.pdf');
        },
        taintTest: true,
        allowTaint : true
      });
    }
    var pdf = $scope.generate().then(function(data){
      $scope.generatingPDF = false;
      $scope.$apply();
    }, function(error){
      $scope.generatingPDF = false;
      $scope.$apply();

    });
  }



}]);

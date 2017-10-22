'use strict';

/**
 * @ngdoc function
 * @name sigSipApp.controller:ConnectionCtrl
 * @description
 * # ConnectionCtrl
 * Controller of the sigSipApp
 */
angular.module('parametersConsultantController', ['textAngular','base64'])
  .controller('ParametersConsultantCtrl',['$scope','$http','$base64' ,'ParameterService',function ($scope, $http, $base64, ParameterService) {

    $scope.consultantParams = {
      header : {},
      footer : ''
    }
    $scope.myfile = {};

    $scope.updateConsultant = function (){
      $scope.successChanged = false;
      $scope.errorOccurs = false;
      $scope.imageTropGrosse = false;
      $scope.consultantParams.header = $scope.myfile;
      if($scope.myfile.filesize > 150000){
        $scope.imageTropGrosse = true;
      }
      else {
        ParameterService.updateHeaderFooterConsultant($scope.consultantParams, function(data){
          $scope.successChanged = true;
          $scope.getHeaderFooter();
        }, function(error){
          $scope.errorOccurs = true;
        });
      }
    };

    $scope.getHeaderFooter = function () {
      ParameterService.getHeaderFooter(null, function(data){
        $scope.imageConsultant = null;
        if (data.data.message[0].header != null){
          $scope.imageConsultant = data.data.message[0].header;
        }
        if (data.data.message[0].footer != null){
          $scope.consultantParams.footer = data.data.message[0].footer;
        }
      }, function(error){
      });
    };
    $scope.getHeaderFooter();

}]);

'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:MenuCtrl
* @description
* # MenuCtrl
* Controller of the sigSipApp
*/
angular.module('menuController', ['serviceSigSyp'])
.controller('MenuCtrl',['$scope', 'UserService', '$location', "$state","$rootScope", "localStorageService",
function ($scope, UserService, $location, $state, $rootScope, localStorageService) {
  // $scope.statusConnect = false;
  // $scope.AdminConnect = false;

  $scope.isConnected = function (){
    if (localStorageService.get('role') && localStorageService.get('token')){
      return true;
    }
    return false;
  }
  $scope.isConnected();
  $scope.isAdmin = function (){
    if ($scope.isConnected() && localStorageService.get('role') === 'Admin'){
      return true;
    }
    return false;
  }
  $scope.isAdmin();
  $scope.isDirigeant = function (){
    if ($scope.isConnected() && localStorageService.get('role') === 'Dirigeant'){
      return true;
    }
    return false;

  }
  $scope.isDirigeant();
  $scope.isConsultant = function (){
    if ($scope.isConnected() && localStorageService.get('role') === 'Consultant'){
      return true;
    }
    return false;

  }
  $scope.isDirigeant();


  $rootScope.$on("connected", function(event, data){
    $scope.isConnected();
    $scope.isAdmin();
    $scope.isDirigeant();

  });
  $scope.currentPath = $state.$current.name;
  if($scope.currentPath === 'home') localStorageService.clearAll();
  $scope.$watch(function(){
    return $state.$current.name;
  }, function(newVal, oldVal){
    $scope.currentPath =newVal;
  })


  //$scope.statusConnect = false;
  //$scope.AdminConnect = false;

  $scope.isCurrentPath = function (path) {
    return $location.path() == path;
  };

  $scope.deconnecter = function() {
    localStorageService.clearAll();
    $scope.statusConnect = false;
    $state.go('connection');
  }

}]);

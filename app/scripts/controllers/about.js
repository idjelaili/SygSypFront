'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('sigSipApp')
.controller('AboutCtrl',["$scope","UserService","localStorageService","$state",
function ($scope,UserService,localStorageService,$state) {

    $scope.essayer = function() {
           $state.go('inscription');
    }

}]);

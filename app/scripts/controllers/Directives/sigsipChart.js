'use strict';

/**
* @ngdoc function
* @name sigSipApp.controller:ConnectionCtrl
* @description
* # ConnectionCtrl
* Controller of the sigSipApp
*/
angular.module('highChartDirective',[])
.directive('ssChart',function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      options: '='
    },
    link: function (scope, element, attr) {
      Highcharts.chart(element[0], scope.options);
    }

  }

});

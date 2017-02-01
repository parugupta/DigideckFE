'use strict';

angular.module('myApp.section', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/section', {
    templateUrl: 'components/section/section.html',
    controller: 'SectionCtrl'
  });
}])

.controller('SectionCtrl', [function() {

}]);
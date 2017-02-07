'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.new-deck-directive',
  'myApp.new-section-directive',
  'myApp.new-slide-directive',
  'myApp.create',
  'myApp.view',
  'myApp.link'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //let newDeck = '<new-slide id="slide" class="tab-pane fade" action="create"></new-slide>';
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/link', {
    templateUrl: 'modules/link/link.html',
    controller: 'LinkCtrl',
    controllerAs: 'link'
  });

  $routeProvider.when('/create', {
    templateUrl: 'modules/create/create.html',
    controller: 'CreateCtrl',
    controllerAs: 'create'
  });

  $routeProvider.when('/view', {
    templateUrl: 'modules/view/view.html',
    controller: 'ViewCtrl',
    controllerAs: 'view'
  });

  $routeProvider.otherwise({redirectTo: '/create'});
}])

.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
}]);
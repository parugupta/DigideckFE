'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.new-deck-directive',
  'myApp.new-section-directive',
  'myApp.new-slide-directive',
  'myApp.create'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //let newDeck = '<new-slide id="slide" class="tab-pane fade" action="create"></new-slide>';
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/update', {
    templateUrl: 'modules/update/update.html'
  });

  $routeProvider.when('/create', {
    templateUrl: 'modules/create/create.html'
  });

  $routeProvider.when('/view', {
    templateUrl: 'modules/view/view.html'
  });

  $routeProvider.otherwise({redirectTo: '/create'});
}])

.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
}]);
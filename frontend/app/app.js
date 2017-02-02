'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.new-deck-directive',
  'myApp.new-section-directive',
  'myApp.new-slide-directive'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
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
}]);

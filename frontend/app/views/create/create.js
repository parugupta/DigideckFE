'use strict';

angular.module('myApp.deck', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/deck', {
    templateUrl: 'components/deck/deck.html',
    controller: 'DeckCtrl'
  });
}])

.controller('DeckCtrl', [function() {

}]);
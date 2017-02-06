'use strict';

angular.module('myApp.create', [])
.controller('CreateCtrl', ['$scope', '$location', function($scope, $location) {
	let vm = this;
	/*vm.$onInit = function() {
		console.log("init");
      $location.hash('deck');
    };*/

	vm.isActive = function (viewTab) {
      	return viewTab === $location.hash();
    };
}]);
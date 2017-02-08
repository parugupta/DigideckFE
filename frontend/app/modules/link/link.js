'use strict';

angular.module('myApp.link', ['ngRoute'])
.controller('LinkCtrl', function($http) {
	let vm = this;
	vm.industries = ['TMT', 'CNIP'];
  	//vm.industry = vm.industries[0];
  	vm.getDecks = function() {
  		$http.get('http://10.118.37.64:4000/admin/deck').then(function(res) {
  			console.log('deck response---', res);
  			vm.decks = res.data;
	    }, function(err) {
	    	console.log('error---',err)
	    });
  	};

  	vm.getSections = function() {
  		$http.get('http://10.118.37.64:4000/admin/section').then(function(res) {
  			console.log('section response---', res);
  			vm.sections = res.data;
	    }, function(err) {
	    	console.log('error---',err)
	    });
  	};

  	vm.getSlides = function() {
  		$http.get('http://10.118.37.64:4000/admin/slide').then(function(res) {
  			console.log('slide response---', res);
  			vm.slides = res.data;
	    }, function(err) {
	    	console.log('error---',err)
	    });
  	};

  	vm.getDecks();
  	vm.getSections();
  	vm.getSlides();

  	vm.showError = function(formName, input) {
    return (vm[formName].$submitted && vm[formName][input].$invalid);
  }
});
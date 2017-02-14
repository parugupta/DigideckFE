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

  	var init = function() {
  		vm.getDecks();
	  	vm.getSections();
	  	vm.getSlides();
	};

  	vm.showError = function(formName, input) {
		return (vm[formName].$submitted && vm[formName][input].$invalid);
	}

	vm.expandPanel = function() {
		vm.isLinkingSuccessful = 'no_alert';
		vm.errorMessage = '';
	}

	vm.onDeckSectionSubmit = function() {
		let data = {
			deck: vm.deckPanel2,
			section: vm.sectionPanel2,
			sequence: vm.sectionSequence
		};
		console.log("data", data);
		$http.post('http://10.118.37.64:4000/admin/decksection', data).then(function(res) {
  			console.log('SUCESS---', res);
			vm.isLinkingSuccessful = 'success';
  			vm.errorMessage = 'Section has been successfully linked to the deck';

	    }, function(err) {
	    	console.log('error---',err);
			vm.vm.isLinkingSuccessful = 'error';
			vm.errorMessage = 'Error linking section with the deck, please try again!';
	    });
	};

	vm.onSectionSlideSubmit = function() {
		let data = {
			section: vm.sectionPanel3,
			slide: vm.slidePanel3,
			sequence: vm.slideSequence
		};
		console.log("2 data", data);
		$http.post('http://10.118.37.64:4000/admin/sectionslide', data).then(function(res) {
  			console.log('SUCESS---', res);
			vm.isLinkingSuccessful = true;
  			vm.errorMessage = 'Slide has been successfully linked to the section';
	    }, function(err) {
	    	console.log('error---',err);
			vm.vm.isLinkingSuccessful = false;
			vm.errorMessage = 'Error linking slide with the section, please try again!';
	    });
	};

	init();
});
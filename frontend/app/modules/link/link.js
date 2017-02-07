'use strict';

angular.module('myApp.link', ['ngRoute'])
.controller('LinkCtrl', function() {
	let vm = this;
	vm.industries = ['TMT', 'CNIP'];
  	//vm.industry = vm.industries[0];
  	vm.decks = [
  		{
  			id: 1234,
  			title: 'Deck1'
  		},{
  			id: 5678,
  			title: 'Deck2'
  		},{
  			id: 9012,
  			title: 'Deck3'
  		}
  	];

  	vm.sections = [
  		{
  			id: 12,
  			title: 'Section1'
  		},{
  			id: 34,
  			title: 'Section2'
  		},{
  			id: 56,
  			title: 'Section3'
  		}
  	];

  	vm.slides = [
  		{
  			id: 1,
  			title: 'Slide1'
  		},{
  			id: 2,
  			title: 'Slide2'
  		},{
  			id: 3,
  			title: 'Slide3'
  		},{
  			id: 4,
  			title: 'Slide4'
  		},{
  			id: 5,
  			title: 'Slide5'
  		},{
  			id: 6,
  			title: 'Slide6'
  		}
  	];

  	/*$http.get('http://10.118.37.64:4000/admin/deck', data).then(function(res) {
      vm.isDeckCreated = 'success';
    }, function(err) {
      vm.isDeckCreated = 'error';
    });*/

  	vm.showError = function(formName, input) {
    return (vm[formName].$submitted && vm[formName][input].$invalid);
  }
});
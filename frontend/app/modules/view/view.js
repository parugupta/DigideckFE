'use strict';

angular.module('myApp.view', ['ngRoute'])
.controller('ViewCtrl', ['$http',function($http) {

    let vm = this;
    vm.industries = ['TMT', 'CNIP', 'others'];
    vm.industry = vm.industries[0];
    vm.displayForm = false;
    vm.showDeckList = false;
    vm.showSectionList = false;
    vm.showSlideList = false;
    
    vm.getDeckList = function() {
       let data = {
            //industry: vm.industry,
            industry : '582d748f7357d2762641fff1'
        };
        vm.showDeckList = false;
        vm.showSectionList = false;
        vm.showSlideList = false;
        
        $http.get('http://10.118.37.64:4000/deck', data).then(function(res) {
           vm.showDeckList = true;
           vm.decksByIndustry = res.data;
        }, function(err) {
            //vm.showDeckList = false;
            console.log('ERROR', err);
            vm.decksByIndustry = [];
        });
    }

    vm.showSection = function(data) {
        $http.get('http://10.118.37.64:4000/admin/section', data).then(function(res) {
           vm.showSectionList = true;
           vm.sectionsByDeck = res.data;
        }, function(err) {
            //vm.showSectionList = false;
            console.log('ERROR', err);
            vm.sectionsByDeck = [];
        });
    }

    vm.showSlide = function(data) {
         $http.get('http://10.118.37.64:4000/admin/slide', data).then(function(res) {
           vm.showSlideList = true;
           vm.slidesBySection = res.data;
        }, function(err) {
            //vm.showSlideList = false;
            console.log('ERROR', err);
            vm.slidesBySection = [];
        });
    }

    vm.showEditForm = function() {
        vm.displayForm = `deck`;
    }

    vm.submitEdit = function() {
        let data = null;
        let endpoint = ``
        if(vm.displayForm === `deck`) {
            data = {
                name: vm.deckName,
                industry: vm.deckIndustry
            }
            endpoint = `http://10.118.37.64:4000/admin/deck`
        } else if(vm.displayForm === `section`) {
            data = {
                name: vm.sectionTitle
            }
            endpoint = `http://10.118.37.64:4000/admin/section`
        } else if(vm.displayForm === `slide`) {
            data = {
                title: vm.slideTitle,
                description: vm.slideDescription,
                video_url: vm.vslideVideoUrl,
                template_type: vm.templateType
            }
            endpoint = `http://10.118.37.64:4000/admin/slide`
        }

        $http.patch(endpoint, data).then(function(res) {
            vm.isEditted = 'success';
        }, function(err) {
            vm.isEditted = 'error';
        });
    }

    vm.showError = function(formName, input) {
		return (vm[formName].$submitted && vm[formName][input].$invalid);
	}
}]);
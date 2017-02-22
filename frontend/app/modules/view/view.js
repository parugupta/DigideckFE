'use strict';

angular.module('myApp.view', ['ngRoute'])
.controller('ViewCtrl', ['$http',function($http) {

    let vm = this;
    //vm.industries = ['TMT', 'CNIP', 'others'];
    //vm.industry = vm.industries[0];
    vm.displayForm = false;
    vm.showDeckList = false;
    vm.showSectionList = false;
    vm.showSlideList = false;
    vm.displayForm = {
        deck: false,
        section: false,
        slide: false
    };
    
    vm.getIndustryList = function() {
        $http.get('http://10.118.37.64:4000/admin/industry').then(function(res) {
           vm.industries = res.data;
        }, function(err) {
            console.log('ERROR', err);
        });
    };

    vm.getDeckList = function() {
       let data = {
            industry: vm.industry,
            //industry : '582d748f7357d2762641fff1'
        };
        vm.showDeckList = false;
        vm.showSectionList = false;
        vm.showSlideList = false;

        //'http://10.118.37.64:4000/admin/deck', data
        
        $http.get('http://10.118.37.64:4000/deck').then(function(res) {
           vm.decksByIndustry = res.data;
           vm.showDeckList = res.data.length;
        }, function(err) {
            //vm.showDeckList = false;
            console.log('ERROR', err);
            vm.decksByIndustry = [];
        });
    };

    vm.showSection = function(deckId) {
        vm.sectionsByDeck = vm.decksByIndustry;
        vm.showSectionList = vm.decksByIndustry.length;
    };

    vm.showSlide = function(sectionItem) {
        vm.showSlideList = sectionItem.slide.length;
        vm.slidesBySection = sectionItem.slide;
    };

    vm.showEditForm = function(formType, data) {
        vm.editData = data;
        angular.forEach (vm.displayForm, function(value, key) {
            if (key == formType) {
                vm.displayForm[key] = true;
            }
            else {
                vm.displayForm[key] = false;
            }
            //vm.displayForm[key] = key === formType ? true : false;
        });
    };

    /*vm.submitEdit = function() {
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
    }*/

    vm.showError = function(formName, input) {
		return (vm[formName].$submitted && vm[formName][input].$invalid);
	};

    vm.getIndustryList();
}]);
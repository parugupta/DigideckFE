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
        vm.showDeckList = false;
        vm.showSectionList = false;
        vm.showSlideList = false;

        let endpoint = 'http://10.118.37.64:4000/admin/deck?industry=' + vm.industry;
        
        $http.get(endpoint).then(function(res) {
           vm.decksByIndustry = res.data;
           vm.showDeckList = res.data.length;
        }, function(err) {
            //vm.showDeckList = false;
            console.log('ERROR', err);
            vm.decksByIndustry = [];
        });
    };

    vm.showSection = function(deckId) {
        let endpoint = 'http://10.118.37.64:4000/admin/decksection?deck=' + deckId;
        
        $http.get(endpoint).then(function(res) {
            let sectionIdList = [];
            angular.forEach(res.data, function(data) {
                sectionIdList.push(data.section);
            });
            vm.findSection(sectionIdList);
        }, function(err) {
            //vm.showDeckList = false;
            console.log('ERROR', err);
            vm.sectionsByDeck = [];
            vm.showSectionList = false;
        });
    };

    vm.findSection = function(sectionIDList) {
        let sectionEndpoint = 'http://10.118.37.64:4000/deck';
        vm.sectionsByDeck = [];
        $http.get(sectionEndpoint).then(function(sections) {
            angular.forEach(sections.data, function(section) {
                if (sectionIDList.indexOf(section._id) > 0) {
                    vm.sectionsByDeck.push(section);
                }
            });
            vm.showSectionList = vm.sectionsByDeck.length;
        }, function(err) {
            console.log('ERROR', err);
            vm.sectionsByDeck = [];
            vm.showSectionList = false;
        });
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
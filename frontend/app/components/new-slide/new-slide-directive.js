'use strict';

function NewSlideController($http) {
  let vm = this;
  vm.isSlideCreated = 'no_alert';
  vm.templateTypeList = ['default', 'header', 'video', 'hero_image'];
  vm.$onInit = function() {
    if (!vm.slideData) {
      vm.slideData = {
        template_type: 'default'
      };
    }
  };

  vm.showError = function(input) {
    return (vm.formCreateSlide.$submitted && vm.formCreateSlide[input].$invalid);
  };
  
  vm.submitSlide = function() {
    if (vm.action === 'create') {
      /*let data = {
        title: vm.slideData.title,
        description: vm.slideData.description,
        video_url: vm.slideData.video_url,
        template_type: vm.slideData.template_type.value
      };*/

      $http.post('http://10.118.37.64:4000/admin/slide', vm.slideData).then(function(res) {
        vm.isSlideCreated = 'success';
      }, function(err) {
        vm.isSlideCreated = 'error';
      });
    }
    else if (vm.action === 'update') {
      $http.patch('http://10.118.37.64:4000/admin/slide/'+vm.slideData._id, vm.slideData).then(function(res) {
        vm.isSlideCreated = 'success';
      }, function(err) {
        vm.isSlideCreated = 'error';
      });
    }
  };
}

angular.module('myApp.new-slide-directive', [])

.component('newSlide', {
  templateUrl: 'components/new-slide/new-slide-view.html',
  controller: NewSlideController,
  controllerAs: 'slide',
  bindings: {
    action: '@',
    slideData: '<'
  }
});
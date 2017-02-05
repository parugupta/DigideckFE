'use strict';

function NewSlideController($http) {
  let vm = this;
  vm.isSlideCreated = 'no_alert';

  vm.showError = function(input) {
    return (vm.formCreateSlide.$submitted && vm.formCreateSlide[input].$invalid);
  }
  
  vm.submitSlide = function() {
    let data = {
      title: vm.title,
      description: vm.description,
      video_url: vm.videoUrl
    }
    $http.post('http://10.118.37.64:4000/admin/slide', data).then(function(res) {
      vm.isSlideCreated = 'success';
    }, function(err) {
      vm.isSlideCreated = 'error';
    });
  }
}

angular.module('myApp.new-slide-directive', [])

.component('newSlide', {
  templateUrl: 'components/new-slide/new-slide-view.html',
  controller: NewSlideController,
  controllerAs: 'slide',
  bindings: {
    action: '@'
  }
});
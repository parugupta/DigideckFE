'use strict';

function NewSlideController($http) {
  let vm = this;
  let data = {
    title: vm.title,
    description: vm.description,
    video_url: vm.videoUrl
  }

  vm.submitSlide = function() {
    $http.post('http://10.118.37.64:4000/admin/slide', data).then(function(res) {
      alert('SUCCESS', res);
    }, function(err) {
      alert('FAIL', err);
    });
  }
}

angular.module('myApp.new-slide-directive', [])

.component('newSlide', {
  templateUrl: 'components/new-slide/new-slide-view.html',
  controller: NewSlideController,
  controllerAs: 'slide',
  bindings: {
  }
});
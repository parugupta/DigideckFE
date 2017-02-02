'use strict';

function NewSlideController($http) {
  let vm = this;
  
  vm.submitSlide = function() {
    let data = {
      title: vm.title,
      description: vm.description,
      video_url: vm.videoUrl
    }
    $http.post('http://10.118.37.64:4000/admin/slide', data).then(function(res) {
      alert('SUCCESS', res);
    }, function(err) {
      console.log(data);
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
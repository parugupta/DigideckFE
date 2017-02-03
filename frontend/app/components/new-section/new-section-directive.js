'use strict';

function NewSectionController($http) {
  vm.isSectionCreated = 'no_alert';

  vm.showError = function(input) {
    return (vm.formCreateSection.$submitted && vm.formCreateSection[input].$invalid);
  }

  vm.submitSection = function() {
    let data = {
      name: vm.title
    }
    $http.post('http://10.118.37.64:4000/admin/section', data).then(function(res) {
      vm.isSectionCreated = 'success';
    }, function(err) {
      vm.isSectionCreated = 'error';
    });
  }
}

angular.module('myApp.new-section-directive', [])

.component('newSection', {
  templateUrl: 'components/new-section/new-section-view.html',
  controller: NewSectionController,
  bindings: {
  }
});
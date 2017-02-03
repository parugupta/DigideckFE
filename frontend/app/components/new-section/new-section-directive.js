'use strict';

function NewSectionController($http) {
  vm.isSectionCreated = 'no_alert';

  vm.showError = function(input) {
    return (vm.formCreateSection.$submitted && vm.formCreateSection[input].$invalid);
  }

  vm.formCreateSection = function() {
    let data = {
      name: vm.name,
      industry: vm.industry
    }
    $http.post('http://10.118.37.64:4000/admin/deck', data).then(function(res) {
      vm.isDeckCreated = 'success';
    }, function(err) {
      vm.isDeckCreated = 'error';
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
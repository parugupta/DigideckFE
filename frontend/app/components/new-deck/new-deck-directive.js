'use strict';

function DeckController($http) {
  let vm = this;
  vm.industries = ['TMT', 'CNIP', 'others'];
  vm.industry = vm.industries[0];
  vm.isDeckCreated = 'no_alert';

  vm.showError = function(input) {
    return (vm.formCreateDeck.$submitted && vm.formCreateDeck[input].$invalid);
  }

  vm.submitDeck = function() {
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

angular.module('myApp.new-deck-directive', [])

.component('newDeck', {
  templateUrl: 'components/new-deck/new-deck-view.html',
  controller: DeckController,
  controllerAs: 'deck',
  bindings: {
    action: '@'
  }
});

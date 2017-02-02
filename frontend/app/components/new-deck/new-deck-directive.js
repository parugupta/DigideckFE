'use strict';

function DeckController() {
  let vm = this;
  vm.industries = ['TMT', 'CNIP', 'others'];
  vm.industryVal = vm.industries[0];

  vm.submitDeck = function() {
    alert('HI');
  }
}

angular.module('myApp.new-deck-directive', [])

.component('newDeck', {
  templateUrl: 'components/new-deck/new-deck-view.html',
  controller: DeckController,
  controllerAs: 'deck',
  bindings: {
  }
});

'use strict';

function NewDeckController() {

}

angular.module('myApp.new-deck-directive', [])

.component('newDeck', {
  templateUrl: 'components/new-deck/new-deck-view.html',
  controller: NewDeckController,
  bindings: {
  }
});

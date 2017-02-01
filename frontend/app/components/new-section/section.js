'use strict';

function NewSectionController() {

}

angular.module('myApp.new-section-directive', [])

.component('newSection', {
  templateUrl: 'components/new-section/new-section-view.html',
  controller: NewSectionController,
  bindings: {
  }
});
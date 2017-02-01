'use strict';

function NewSlideController() {

}

angular.module('myApp.new-slide-directive', [])

.component('newSlide', {
  templateUrl: 'components/new-slide/new-slide-view.html',
  controller: NewSlideController,
  bindings: {
  }
});
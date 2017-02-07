'use strict';

angular.module('myApp.view', ['ngRoute'])
.controller('ViewCtrl', ['$http',function($http) {

    let vm = this;
    vm.industries = ['TMT', 'CNIP', 'others'];
    vm.industry = vm.industries[0];
    
    vm.getDeckList = function(){
       let data = {
        //industry: vm.industry,
        industry : '582d748f7357d2762641fff1'
        }
       
        $http.get('http://10.118.37.64:4000/deck', data).then(function(res) {
           // vm.isDeckCreated = 'success';
           alert('success '+ vm.industry);
        }, function(err) {
           // vm.isDeckCreated = 'error';
            alert('error '+ vm.industry);
        });
    }
}]);
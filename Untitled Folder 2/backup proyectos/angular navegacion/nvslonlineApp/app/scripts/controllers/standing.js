'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:StandingCtrl
 * @description
 * # StandingCtrl
 * Controller of the nvslonlineAppApp
 */
 var controllerId = 'StandingCtrl';
angular.module('nvslonlineAppApp')
  .controller('StandingCtrl', ['$q','$scope', '$modal', 'datacontext', 'toastr', 'webUrl','common', 
  function ($q,$scope, $modal, datacontext, toastr, webUrl, common) {
    var vm = this; 

    vm.standings = getStandings;

      getStandings();
        function getStandings() {
            return datacontext.getStandings(webUrl).then(function (response) {
                return vm.standings = response.data;
            });
        }

    }]);

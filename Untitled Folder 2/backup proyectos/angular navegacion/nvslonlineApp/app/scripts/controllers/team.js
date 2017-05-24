'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('TeamCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl', function ($scope, $modal, datacontext, toastr, webUrl) {
    var vm = this; 
    //vm.teams = getTeams;
var indexedSeasons = [];
var indexedDivisions = [];
    getTeams();
    function getTeams() {
            return datacontext.getTeams(webUrl).then(function (response) {
                return vm.teams = response.data;
            }, function(response) {
              toastr.error("Error has occurred: " + response.data.Message, "Fatal error", {
                positionClass: 'toast-bottom-full-width'
              })                
            });
        }

  }]);

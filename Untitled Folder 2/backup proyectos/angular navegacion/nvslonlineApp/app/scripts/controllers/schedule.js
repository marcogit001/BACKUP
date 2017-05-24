'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('ScheduleCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl','common', 
  function ($scope, $modal, datacontext, toastr, webUrl, common) {
    var vm = this; 

    //vm.getScheduleBySeasonDivision = getScheduleBySeasonDivision;
    vm.convertToTime = common.convertToTime;
    vm.convertToDate = common.convertToDate;
      

    datacontext.getSeasons(webUrl).then(
      function (response) {
        //console.log(response.data);
        vm.seasons = response.data;
      }, function(response) {
        toastr.error("Error has occurred: " + response.data.Message, "Fatal error", {
          positionClass: 'toast-bottom-full-width'
        })                
      });

       datacontext.getDivisions(webUrl).then(
      function (response) {
        console.log(response.data);
        vm.divisions = response.data;
      }, function(response) {
        toastr.error("Error has occurred: " + response.data.Message, "Fatal error", {
          positionClass: 'toast-bottom-full-width'
        })                
      });

      datacontext.getSchedules(webUrl).then(
      function (response) {
        console.log(response.data);
        vm.schedules = response.data;
      }, function(response) {
        toastr.error("Error has occurred: " + response.data.Message, "Fatal error", {
          positionClass: 'toast-bottom-full-width'
        })                
      });

      
      /*function getScheduleBySeasonDivision(seasonId, divisionId) {
            console.log(seasonId);
            console.log(divisionId);
            var filter = new String;
            if (seasonId == null) {
                if (divisionId == null) {
                    filter = "p => p";
                } else {
                    filter = "p => p.DivisionId == " + divisionId;
                }
            } else {
                if (divisionId == null) {
                    filter = "p => p.SeasonId ==" + seasonId ;
                } else {
                    filter = "p => p.SeasonId ==" + seasonId + "&& p.DivisionId == " + divisionId;
                }
            }
             
           vm.schedules = Enumerable.From(vm.schedules)
                            .Where(filter)
                            .ToArray();
                            console.log(vm.schedules);
        }
      */

  }]);
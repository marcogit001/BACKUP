'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:AVenueCtrl
 * @description
 * # AVenueCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('AVenueCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl','common', 
  function ($scope, $modal, datacontext, toastr, webUrl, common) {
    var vm = this;

        vm.title = 'Venues';
        vm.openNewVenue = openNewVenue;
        vm.openEditVenue = openEditVenue;
        
        getVenues();
         function getVenues() {
            return datacontext.getVenues(webUrl).then(function (response) {
                //console.log(data);
                return vm.venues = response.data;
            });
        }
        
        function openNewVenue() {
            var options = {};
            options.webUrl = webUrl;

            var modalInstance = $modal.open({
                templateUrl: 'venue.html',
                controller: modalInstanceNewVenue,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options
                        /*return {
                            //dataDivision
                        };*/
                    }
                }
            });

            modalInstance.result.then(function (data) {
                getVenues();
                //log('Changes Saved');
            }, function () {
            });
        }

        function openEditVenue(venue) {
            
            var options = {};
            options.webUrl = webUrl;
            options.venue = venue;
            //options.dataDivision = dataDivision;

            var modalInstance = $modal.open({
                templateUrl: 'venue.html',
                controller: modalInstanceEditVenue,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options;
                    }
                }
            });
            modalInstance.result.then(function (dataUpdated) {
                getVenues();
                //log('Changes Saved');

            }, function () {
            });
        }
  }]);

  var modalInstanceNewVenue = ['$scope', '$modalInstance', 'options', 'datacontext','$filter',
        function($scope, $modalInstance, options, datacontext,$filter) {
            $scope.ok = function () {
                var venueValues = {};
                venueValues.VenueName = this.venueName;
                venueValues.IsHidden = false;
                
                var dataUpdated = datacontext.addVenue(options.webUrl,venueValues);

                $modalInstance.close(dataUpdated);
            };
            $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        }];

    var modalInstanceEditVenue = ['$scope', '$modalInstance', 'datacontext','common', 'options','$filter', 
        function ($scope, $modalInstance, datacontext,common, options, $filter) {

        var objVenue = options.venue;
       console.log(objVenue);
        
        $scope.venueName = objVenue.VenueName;
        
        $scope.ok = function () {
           
            objVenue.VenueName = this.venueName;
           
            var dataUpdated = datacontext.editVenue(options.webUrl,objVenue);
            $modalInstance.close(dataUpdated);
        };
        $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
    }];


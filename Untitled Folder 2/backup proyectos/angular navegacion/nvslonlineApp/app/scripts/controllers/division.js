'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:DivisionCtrl
 * @description
 * # DivisionCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('DivisionCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl', 
  function ($scope, $modal, datacontext, toastr, webUrl) {
    var vm = this; 

    datacontext.getDivisions(webUrl).then(
      function (response) {
        
        console.log(response.data);
        vm.divisions = response.data;
      }, function(response) {
          console.log(response);
          toastr.error("Error has occurred: " + response.data.Message, "Fatal error", {
          positionClass: 'toast-bottom-full-width'
        })               
      });


    $scope.openNewDivision = function () {
           
            var modalInstance = $modal.open({
                templateUrl: 'division.html',
                controller: modalInstanceNewDivision ,
                controllerAs: vm,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return {
                           // dataDivision
                        };
                    }
                }
            });

            modalInstance.result.then(function (data) {
                //getTeams();
                vm.divisions = data;
                log('Changes Saved');
            }, function () {
            });
        }   

      var modalInstanceNewDivision = ['$scope', '$modalInstance', 'options', 'datacontext',
       function ($scope, $modalInstance, options, datacontext) {
          
           $scope.ok = function () {
               var divisionValues = {};
               divisionValues.DivisionName = this.divisionName;
               divisionValues.IsHidden = false;

               var dataUpdated = datacontext.addDivision(divisionValues);

               $modalInstance.close(dataUpdated);
           };
           $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
       }];
                
  }]);

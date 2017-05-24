'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('LoginCtrl', ['$scope', 'datacontext', 'toastr', 'webUrl','common','authentication', 
  function ($scope, datacontext, toastr, webUrl, common, authentication) {
  
    var vm = this; 

//datacontext.getSchedules(webUrl).then(
    $scope.login = function () {
            $scope.dataLoading = true;
            authentication.Login($scope.username, $scope.password, function (response) {
                
                if (response.successAdmin) {
                    authentication.SetCredentials($scope.username, $scope.password);
                    $location.path('/admin');
                } else {
                    if (response.successContribuidor) {
                        authentication.SetCredentials($scope.username, $scope.password);
                        $location.path('/contribuidor');
                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }

                }
            });
        };

  }]);

'use strict';

angular.module('nvslonlineAppApp')
  .controller('RegisterCtrl', function ($scope, $http, toastr) {
    $scope.submit = function() {
      var url = 'http://localhost:3000/register';
      var user = {
        name: 'Alex'
      };
      
      $http
        .post(url, user)
        .then(function(res) {
           //toastr.success("register successfully");
           toastr.success("You have registered successfully", "Register Status", {
             positionClass: 'toast-bottom-full-width'
           })
        }, function(err) {
           toastr.error("Failed register, Please contact you Administrator", "Register Status", {
             positionClass: 'toast-bottom-full-width'
           })
        });
    }
  });

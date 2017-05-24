'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('LoginCtrl', function (authUser) {
    var vm = this;
    vm.loginForm={
      username:'admin',
      email:'admin@hotmail.com',
      password:'tipito98'
    }
    
    vm.login =  function(){
      authUser.loginApi(vm.loginForm);
    }
  });

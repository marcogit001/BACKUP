'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.authUser
 * @description
 * # authUser
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('authUser', function ($auth) {
      var login = function(loginForm){
        $auth.login(loginForm).then(
          function(response){
            console.log(response);
          },
          function(error){
            console.log(error);
          }
        );
      };

      return{
        loginApi: function(loginForm){
          login(loginForm);
        }
      }
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

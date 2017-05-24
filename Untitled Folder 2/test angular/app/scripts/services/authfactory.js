'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.authFactory
 * @description
 * # authFactory
 * Factory in the testAngularApp.
 */
angular.module('testAngularApp')
  .factory('authFactory', function () {
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

'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider,$authProvider,$locationProvider) {
    $authProvider.loginUrl = 'http://localhost:8000/rest-auth/login/';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      }) 


      .otherwise({
        redirectTo: '/'
      });
      //$locationProvider.html5Mode(true);
  });

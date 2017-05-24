'use strict';

/**
 * @ngdoc overview
 * @name nvslonlineAppApp
 * @description
 * # nvslonlineAppApp
 *
 * Main module of the application.
 */
angular
  .module('nvslonlineAppApp', [
    //Angula modules
    'ui.router', //routing 
    'toastr',// 
    'ui.bootstrap',//ui-bootstrap(ex:carousel,pagination,dialog)
    'angular.filter',//filter permite hacer filtros en htmlPage
    'angular-linq'    //$linq.Enumerable()
    ]);

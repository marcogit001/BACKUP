'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:TopNavigationSettingCtrl
 * @description
 * # TopNavigationSettingCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('TopNavigationSettingCtrl', 
  function ($scope,$state, $modal, $window,datacontext, toastr, webUrl, common) {
    var vm = this;
     console.log(angular.toJson($state.get()));
     //vm.title = 'Season';
        vm.openTopNavigation = openTopNavigation;
        vm.openEditTopNavigation = openEditTopNavigation;
        vm.save = save;

        getRoles();
        getTopNavigation();
       
        function getRoles() {
            return datacontext.getRoles(webUrl).then(function (response) {
                //console.log(response.data);
                vm.roles = response.data;
                vm.idRoleSelected = vm.roles.length;
                return vm.roles;
            });
        }

        function getTopNavigation() {
            return datacontext.getTopNavigation(webUrl).then(function (response) {
              console.log(response.data);
                return vm.topNavigation = response.data;
            });
        }

        //vm.idRoleSelected = null;
        vm.setRoleSelected = setRoleSelected;
        function setRoleSelected(idRoleSelected) {
            vm.idRoleSelected = idRoleSelected;
            vm.idNavSelected = null;
            vm.TopMenu = null;
            vm.TopMenuLink = null;
        }

        vm.idNavSelected = null;
        vm.setNavSelected = setNavSelected;
        function setNavSelected(idNavSelected) {
            vm.idNavSelected = idNavSelected.Id;
            vm.TopMenu = idNavSelected.TopMenu;
            vm.TopMenuLink = idNavSelected.TopMenuLink;

            vm.TopNavigation = idNavSelected;//seleccionamos el objecto
        }

        function save() {
            $window.location.href='/';
        }

    function openTopNavigation() {
            var options = {};
            options.webUrl = webUrl;
            options.RoleId = vm.idRoleSelected;

            var modalInstance = $modal.open({
                templateUrl: 'topNavigation.html',
                controller: modalInstanceNewNavigation,
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
                getTopNavigation();
                /*$timeout(function(){
                    $controller('TopNavigationCtrl',{
                        $scope:$scope
                    })
                })*/
                
                //log('Changes Saved');
            }, function () {
            });
        }

    function openEditTopNavigation() {
        if (vm.TopNavigation!=undefined) {
            var options = {};
            options.webUrl = webUrl;
            options.TopNavigation = vm.TopNavigation;

            var modalInstance = $modal.open({
                templateUrl: 'topNavigation.html',
                controller: modalInstanceEditNavigation,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options
                    }
                }
            });

            modalInstance.result.then(function (data) {
                getTopNavigation();
                setNavSelected(data)
            }, function () {
            });
        }
    }

  });

var modalInstanceNewNavigation = ['$scope', '$modalInstance', 'options', 'datacontext','$filter',
        function($scope, $modalInstance, options, datacontext,$filter) {



            $scope.ok = function () {
                var topNavigationValues = {};
                topNavigationValues.TopMenu = this.topMenu;
                topNavigationValues.TopMenuDescription = this.topMenuDescription;
                topNavigationValues.TopMenuLink = this.topMenuLink;

                topNavigationValues.TopMenuOrder = 1;
                topNavigationValues.TopParentId = 0;
                topNavigationValues.TopMenuExternal = this.topMenuExternal;
                topNavigationValues.RoleId = options.RoleId;
                topNavigationValues.IsHidden = false;
                
                console.log(topNavigationValues);
                
                var dataUpdated = datacontext.addTopNavigation(options.webUrl,topNavigationValues);

                $modalInstance.close(dataUpdated);
            };
            $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        }];

var modalInstanceEditNavigation = ['$scope', '$modalInstance', 'datacontext', 'options','$filter', 
        function ($scope, $modalInstance, datacontext, options, $filter) {

        var topNavigationValues = options.TopNavigation;
       $scope.topMenu = topNavigationValues.TopMenu;
       $scope.topMenuDescription = topNavigationValues.TopMenuDescription;
       $scope.topMenuLink = topNavigationValues.TopMenuLink;
       $scope.topMenuExternal = topNavigationValues.TopMenuExternal;
       
        $scope.ok = function () {
           
                topNavigationValues.TopMenu = this.topMenu;
                topNavigationValues.TopMenuDescription = this.topMenuDescription;
                topNavigationValues.TopMenuLink = this.topMenuLink;

                topNavigationValues.TopMenuOrder = 1;
                topNavigationValues.TopParentId = 0;
                topNavigationValues.TopMenuExternal = this.topMenuExternal;
                //topNavigationValues.RoleId = options.RoleId;
                topNavigationValues.IsHidden = false;

            var dataUpdated = datacontext.editTopNavigation(options.webUrl,topNavigationValues);
            $modalInstance.close(dataUpdated);
        };
        $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
    }];
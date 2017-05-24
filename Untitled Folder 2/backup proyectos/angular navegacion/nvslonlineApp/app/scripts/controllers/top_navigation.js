'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:TopNavigationCtrl
 * @description
 * # TopNavigationCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('TopNavigationCtrl', 
   function ($scope,$modal, datacontext, toastr, webUrl, common) {
  var vm = this;

  getRoles();
  getTopNavigation();
      
        function getRoles() {
            return datacontext.getRoles(webUrl).then(function (response) {
                //console.log(data);
                vm.roles = response.data;
                vm.role = vm.roles.length;
                return vm.roles ;
            });
        }
        
        function getTopNavigation() {
            return datacontext.getTopNavigation(webUrl).then(function (response) {
                //console.log(data);
                var lstTopNav = [];
                if (response.data.length > 0 ) {
                    lstTopNav = response.data;
                }
                

                //role = vm.role;
                var role = "Administrator"
                switch (role) {
                    case 'Administrator':
                        var navAdmin={
                            Id :0,
                            TopMenu: "Top Navigation settings",
                            TopMenuDescription: "Top Navigation settings description",
                            TopMenuLink: "topNavigation",
                            TopMenuOrder: 1,
                            TopParentId: 0,
                            TopMenuExternal: 0,
                            IsHidden: false,
                            RoleId: 4
                        };
                        lstTopNav.push(navAdmin);
                        
                        break;
                
                    default:
                        break;
                }
                console.log(lstTopNav);
                return vm.topNavigation = lstTopNav;
            });
        }
    
  });

'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:ASeasonCtrl
 * @description
 * # ASeasonCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('ASeasonCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl','common', 
  function ($scope, $modal, datacontext, toastr, webUrl, common) {
    var vm = this;

    vm.convertToTime = common.convertToTime;
    vm.convertToDate = common.convertToDate;
        //vm.news = {
        //    title: 'Hot Towel Angular',
        //    description: 'Hot Towel Angular is a SPA template for Angular developers.'
        //};
        //vm.messageCount = 0;
        //vm.people = [];
        vm.title = 'Season';
        vm.openNewSeason = openNewSeason;
        vm.openEditSeason = openEditSeason;
        
        getSeason();
         function getSeason() {
            return datacontext.getSeasons(webUrl).then(function (response) {
                //console.log(data);
                return vm.seasons = response.data;
            });
        }
        
        function openNewSeason() {
            var options = {};
            options.webUrl = webUrl;

            var modalInstance = $modal.open({
                templateUrl: 'season.html',
                controller: modalInstanceNewSeason,
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
                getSeason();
                //log('Changes Saved');
            }, function () {
            });
        }

        function openEditSeason(season) {
            
            var options = {};
            options.webUrl = webUrl;
            options.season = season;
            //options.dataDivision = dataDivision;

            var modalInstance = $modal.open({
                templateUrl: 'season.html',
                controller: modalInstanceEditSeason,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options;
                    }
                }
            });
            modalInstance.result.then(function (dataUpdated) {
                getSeason();
                //log('Changes Saved');

            }, function () {
            });
        }
  }]);

  var modalInstanceNewSeason = ['$scope', '$modalInstance', 'options', 'datacontext','$filter',
        function($scope, $modalInstance, options, datacontext,$filter) {
            $scope.ok = function () {
                var seasonValues = {};
                seasonValues.SeasonName = this.seasonName;
                seasonValues.Active = false;
                seasonValues.IsHidden = false;
                seasonValues.SeasonStart = $filter('date')(this.seasonStart, 'yyyy-MM-dd');
                seasonValues.SeasonEnd = $filter('date')(this.seasonEnd,'yyyy-MM-dd');
                //seasonValues.SeasonStart = this.seasonStart;
                //seasonValues.SeasonEnd = this.seasonEnd;
                console.log(seasonValues);
                
                var dataUpdated = datacontext.addSeason(options.webUrl,seasonValues);

                $modalInstance.close(dataUpdated);
            };
            $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        }];

    var modalInstanceEditSeason = ['$scope', '$modalInstance', 'datacontext','common', 'options','$filter', 
        function ($scope, $modalInstance, datacontext,common, options, $filter) {

        var objSeason = options.season;
       console.log(objSeason);
        
        $scope.seasonName = objSeason.SeasonName;
        $scope.seasonStart = common.convertToDate(objSeason.SeasonStart);
        $scope.seasonEnd = common.convertToDate(objSeason.SeasonEnd);
       
        $scope.ok = function () {
           
            objSeason.SeasonName = this.seasonName;
            objSeason.SeasonStart = $filter('date')(this.seasonStart, 'yyyy-MM-dd');
            objSeason.SeasonEnd = $filter('date')(this.seasonEnd,'yyyy-MM-dd');

            var dataUpdated = datacontext.editSeason(options.webUrl,objSeason);
            $modalInstance.close(dataUpdated);
        };
        $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
    }];

'use strict';

/**
 * @ngdoc function
 * @name nvslonlineAppApp.controller:ATeamCtrl
 * @description
 * # ATeamCtrl
 * Controller of the nvslonlineAppApp
 */
angular.module('nvslonlineAppApp')
  .controller('ATeamCtrl', ['$scope', '$modal', 'datacontext', 'toastr', 'webUrl', 
  function ($scope, $modal, datacontext, toastr, webUrl) {
    
        var vm = this;
        //vm.news = {
        //    title: 'Hot Towel Angular',
        //    description: 'Hot Towel Angular is a SPA template for Angular developers.'
        //};
        //vm.messageCount = 0;
        //vm.people = [];
        vm.title = 'Teams';
        vm.openNewTeam = openNewTeam;
        vm.openEditTeam = openEditTeam;
        vm.openDeleteTeam = openDeleteTeam;

        vm.getTeamsByDivision = getTeamsByDivision;
        //vm.getDivisionName = getDivisionName;

    var indexedDivisions = [];

        //carga inicial de data
        getTeams();
        getDivision();
        getSeason();

        function getTeams() {
            return datacontext.getTeams(webUrl).then(function (response) {
                vm.allTeams = response.data;
                return vm.teams =  response.data;
            });
        }

        $scope.teamsToFilter = function(){
            indexedDivisions.length = 0;
            return vm.teams;
        }

        $scope.filterDivisions = function(team){
            var divisionIsNew = indexedDivisions.indexOf(team.DivisionId)==-1;
            if(divisionIsNew){
                indexedDivisions.push(team.DivisionId);
            }
            return divisionIsNew;
        }

        function getDivision() {
            return datacontext.getDivisions(webUrl).then(function (response) {
                return vm.divisions = response.data;
            });
        }

        function getSeason() {
            return datacontext.getSeasons(webUrl).then(function (response) {
                return vm.seasons = response.data;
            });
        }

        function openNewTeam() {
            var dataDivision = vm.divisions;
            var dataSeason = vm.seasons;
            
            var options = {};
            options.dataDivision = dataDivision;
            options.dataSeason = dataSeason;
            options.webUrl = webUrl;

            var modalInstance = $modal.open({
                templateUrl: 'team.html',
                controller: modalInstanceNew,
                //size: size,

                resolve: {
                    options: function () { //send to modal
                        return options;                       
                    }
                }
            });

            modalInstance.result.then(function (data) {
                getTeams();
                //vm.allTeams = data;
               // vm.teams = data;
                //log('Changes Saved');
            }, function () {
            });
        }

        function openEditTeam(team) {
            var options = {};
            options.team = team;
            options.dataDivision = vm.divisions;
            options.dataSeason = vm.seasons;
            options.webUrl = webUrl;

            var modalInstance = $modal.open({
                templateUrl: 'team.html',
                controller: modalInstanceEdit,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options;
                    }
                }
            });
            modalInstance.result.then(function (dataUpdated) {
                //vm.allTeams = data;
                //vm.teams = dataUpdated;
                getTeams();
                //log('Changes Saved');

            }, function () {
            });
        }

        function openDeleteTeam(team) {
            var options = {};
            options.team = vm.team;
            options.webUrl = webUrl;

            var modalInstance = $modal.open({
                templateUrl: 'delete.html',
                controller: modalInstanceDelete,
                //size: size,

                resolve: {
                    options: function () { //esta es la info enviada al modal si se cargo correctamente. tb se puede info en el scope que abre el modal
                        return options;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                //vm.allTeams = data;
                //vm.teams = data;
                getTeams();
                //log('Changes Saved');
            }, function () {
            });
        }

        function getTeamsByDivision(divisionId) {
            vm.teams = getLstTeamsByDivision(divisionId, vm.allTeams);
        }
  }]);

   var modalInstanceNew = ['$scope', '$modalInstance', 'options', 'datacontext',
       function ($scope, $modalInstance, options, datacontext) {
           
           $scope.Divisions = options.dataDivision;
           $scope.Seasons = options.dataSeason;

           $scope.ok = function () {
               var teamValues = {};
               teamValues.TeamName = this.teamName;
               teamValues.DivisionId = this.division;
               teamValues.SeasonId = this.season;
               teamValues.IsHidden = false;

               var dataUpdated = datacontext.addTeam(options.webUrl,teamValues);

               $modalInstance.close(dataUpdated);
           };
           $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
       }];

    var modalInstanceEdit = ['$scope', '$modalInstance', 'datacontext', 'options', function ($scope, $modalInstance, datacontext, options) {
         
        var objTeam = options.team;
        $scope.Divisions = options.dataDivision;
        $scope.Seasons = options.dataSeason;

        $scope.teamName = objTeam.TeamName;
        $scope.division = objTeam.DivisionId;
        $scope.season = objTeam.SeasonId;
        
        $scope.ok = function () {
               objTeam.TeamName = this.teamName;
               objTeam.DivisionId = this.division;
               objTeam.SeasonId = this.season;

               var dataUpdated = datacontext.editTeam(options.webUrl,objTeam);
               $modalInstance.close(dataUpdated);
           };
           $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
    }];

    var modalInstanceDelete = ['$scope', '$modalInstance', 'datacontext', 'options', function ($scope, $modalInstance, datacontext, objTeam) {
        console.log(options);
        var objTeam = options.team;
        $scope.teamName = objTeam.TeamName;
        $scope.division = objTeam.Division.DivisionName;

        $scope.ok = function () {
            //objTeam.TeamName = this.teamName;
            //objTeam.Category = this.category;

            var dataUpdated = datacontext.deleteTeam(options.webUrl,objTeam);
            //console.log(updated);
            $modalInstance.close(dataUpdated);
        };
        $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
    }];
